import batch from '../models/batch.model.js'


const createBatchController = async(req, res, next) =>{
     try {
        const {batchName, startDate, endDate} = req.body
        const newBatch = await batch.create({batchName, startDate, endDate}
        )
        res.status(200).json({
            success: true,
            message: 'batch created successfully',
            data: newBatch
        })
        
     } catch (error) {
    if (error.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "Batch name already exists"
        });
    }
        res.status(500).json({
        success: false,
        message: "Something went wrong while creating the batch"
    });
     }
}

// update batch controller 
const updateBatchController = async (req, res, next) => {
    try {
        const {id} = req.params
        const updateBatch = await batch.findByIdAndUpdate(id, req.body,{new : true} )
        if(!updateBatch){
            return res.status(404).json({
                success: false,
                message: 'batch not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'batch updated successfully',
            data: updateBatch
        })
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
        success: false,
        message: "Something went wrong while creating the batch"
    });
    }
}

// delete batch 
const deleteBatchController = async (req, res, next) => {
    try {
        const {id} = req.params
        const dltBatch = await batch.findByIdAndDelete(id)
         if(!dltBatch){
             return res.status(404).json({
                success: false,
                message: 'batch not found'
            })
         }
          res.status(200).json({
            success: true,
            message: 'batch deleted successfully',
            data: dltBatch
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
        success: false,
        message: "Something went wrong while creating the batch"
    });
    }
}

export {createBatchController, updateBatchController, deleteBatchController}