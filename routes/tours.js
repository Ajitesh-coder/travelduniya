import  express  from "express";
import { createTour , updateTour , deleteTour , getSingleTour , getAllTour, getTourBySearch , getFeaturedTour , getTourCount} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router(); 

// create new Tour
router.post('/',verifyAdmin,createTour)

// updated new Tour
router.put('/:id', verifyAdmin,updateTour)

// delete new Tour
router.delete('/:id', verifyAdmin,deleteTour)

// getSingle Tour
router.get('/:id', getSingleTour)

// create getAll Tour
router.get('/',getAllTour)

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

// featured Tour
router.get('/search/getFeaturedTours', getFeaturedTour)

// featured Tour
router.get('/search/getTourCount', getTourCount )

export default router;