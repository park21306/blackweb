/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
import regressions from 'regression'
import regression from './Lib/Mul.js'
export const Lin = async (req, res) => {
    const data = req.body
    let x = []
    let y = []
    let ans = []

    for (const key in data.datax) {
        x.push(data.datax[key])
    }
    for (const key in data.datay) {
        y.push(data.datay[key])
    }
    x.map((r, i) => {
        ans.push([x[i], y[i]])
    })
    const linear = regressions.linear(ans)

    res.json({ data: linear, result: linear.predict(data.Prediction) })
}

export const Pol = (req, res) => {
    const data = req.body
    let x = []
    let y = []
    let ans = []
    for (const key in data.datax) {
        x.push(data.datax[key])
    }
    for (const key in data.datay) {
        y.push(data.datay[key])
    }
    x.map((r, i) => {
        ans.push([x[i], y[i]])
    })
    const poly = regressions.polynomial(ans)
    console.log(poly.predict(data.prediction))
    res.json({ data: poly, ans: poly.predict(data.prediction) })
}
export const Mul = async (req, res) => {
    const data = req.body
    let x1 = []
    let x2 = []
    let x3 = []
    let y = []
    let ans = []
    for (const key in data.datax1) {
        x1.push(data.datax1[key])
    }
    for (const key in data.datax2) {
        x2.push(data.datax2[key])
    }
    for (const key in data.datax3) {
        x3.push(data.datax3[key])
    }
    for (const key in data.datay) {
        y.push(data.datay[key])
    }
    x1.map((r, i) => {
        ans.push([x1[i], x2[i], x3[i], y[i]])
    })
    const multi = regression(ans)

    res.json({ multi })
}

export default { Lin, Pol, Mul }
