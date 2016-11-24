/**
 * Created by libing on 16-11-23.
 */

import {findById} from "../services/user_service";

exports.findById = async(req, res, next) => {
    let id = req.param("id");
    let ret = await findById(id);
    console.log("结果为："+ ret);
    res.json(ret);
}
