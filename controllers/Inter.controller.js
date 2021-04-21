/**
 *
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
import Spline from 'cubic-spline'
export const Ndd = (req, res) => {
    const data = req.body
    let dx = []
    let dy = []
    let input = [] //input index
    for (const key in data.datax) {
        dx.push(data.datax[key])
    }
    for (const key in data.datay) {
        dy.push(data.datay[key])
    }
    let x = [],
        fx = []
    let push = () => {
        ;(x = []), (fx = [])
        input = input.map((value) => value - 1)
        input.map((value) => {
            x.push(dx[value])
            fx.push(dy[value])
        })
    }
    let Equation = (i, j) => {
        if (i == j) {
            return fx[i]
        } else if (Math.abs(j - i) == 1) {
            return (fx[j] - fx[i]) / (x[j] - x[i])
        } else {
            return (Equation(i + 1, j) - Equation(i, j - 1)) / (x[j] - x[i])
        }
    }
    let Result = (find) => {
        let sum = 0
        for (let i = 0; i < x.length; i++) {
            let temp = Equation(0, i)
            for (let j = 0; j < i; j++) {
                temp *= find - x[j]
            }
            sum += temp
        }
        return sum
    }
    for (const key in data.index) {
        input.push(data.index[key])
    }
    push()
    let ans = Result(data.prediction)
    console.log(ans)
    res.json({ ans })
}
export const Lag = (req, res) => {
    const data = req.body
    let x = []
    let y = []
    let xp = data.prediction
    for (const key in data.datax) {
        x.push(data.datax[key])
    }
    for (const key in data.datay) {
        y.push(data.datay[key])
    }
    let n = x.length
    let yp = 0
    let p
    for (let i = 0; i < n; i++) {
        p = 1
        for (let j = 0; j < n; j++) {
            if (i != j) {
                p = p * ((xp - x[j]) / (x[i] - x[j]))
            }
        }
        yp = yp + p * y[i]
    }
    let ans = parseFloat(yp.toFixed(5))
    console.log(ans)
    res.json({ ans })
}
export const Sp = (req, res) => {
    const data = req.body
    let x = []
    let y = []
    let ans = []
    let xp = data.prediction
    for (const key in data.datax) {
        x.push(data.datax[key])
    }
    for (const key in data.datay) {
        y.push(data.datay[key])
    }
    const spline = new Spline(x, y)
    for (const key in spline.ks) {
        ans.push(spline.ks[key])
    }

    res.json({ ans })
}
export default { Ndd, Lag, Sp }
