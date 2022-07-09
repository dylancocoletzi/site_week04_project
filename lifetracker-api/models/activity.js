const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Activity{
    static async listActivityForUser(){
        const results = await db.query(
            `
            SELECT category, 
                   SUM(calories),
                   COUNT(name)
            FROM nutrition
            GROUP BY category
            `
        ,)
        return results.rows
    }
}

module.exports = Activity