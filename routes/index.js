import express from 'express';
import Url from '../models/Url.js';

const router = express.Router();

router.get('/url_list', async (req, res) => {
  console.log('list')
  try {
    console.log('list')
    const urls = await Url.find({});
    res.json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
});


router.get('/:urlId', async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});


export default router;
