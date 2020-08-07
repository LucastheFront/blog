import express from 'express';
import multer from 'multer';
import postController from '../postsControllers/posts';

// Configure multer to upload files (multer parses incoming requests data with body and file object)
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

// Use the express router
const router = express.Router();

router.get('/api/v1/posts', postController.getAllPosts);
router.get('/api/v1/posts/:id', postController.getPost);
router.post('/api/v1/posts', upload.single('image'), postController.createPost);

export default router;