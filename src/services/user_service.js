/**
 * Created by libing on 16-11-23.
 */

var user = {};

user.findById = async function findById(id) {
    if(!id) {
        return "暂无数据";
    }
    return id;
}

module.exports = user;