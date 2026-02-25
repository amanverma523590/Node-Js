
import { Router } from "express";
import { postURLShortner,getShortnerPage,redirectToShorLink } from "../Controllers/controller.js";

const router = Router();

// router.get('/report', (req, res) => {
//     const student = [
//         {
//             name: "aman",
//             grade: "10th"
//         },
//         {
//             name: "sanam",
//             grade: "10th"
//         }
//     ]
//     return res.render("report", { student });
// })

router.get("/",getShortnerPage)
router.post("/",postURLShortner);
router.get("/:shortCode",redirectToShorLink)

// export default router;
export const shortRoute = router;