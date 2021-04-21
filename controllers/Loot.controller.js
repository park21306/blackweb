/**
 *
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
import { derivative, simplify, evaluate } from 'mathjs'
export const Se = async (req, res) => {
    const data = req.body
    let result = []
    let x0 = data.x0
    let x1 = data.x1
    let i = 1
    let xi, fx0, fx1, deltax
    let er = 1
    let ans = data.error
    if (ans == null || ans <= 0) {
        ans = 0.000001
    }
    let fx = (x) => {
        let a = simplify(data.eq).toString()
        return evaluate(a, { x })
    }
    while (er >= ans) {
        if (i > 0) {
            fx0 = fx(x0)
            fx1 = fx(x1)
            deltax = parseFloat(((fx1 * (x0 - x1)) / (fx0 - fx1)).toFixed(5))
            xi = parseFloat((x1 - deltax).toFixed(5))
            er = parseFloat(Math.abs((xi - x1) / xi).toFixed(6))
            x0 = x1
            x1 = xi
            result.push({ iteration: i, x0, x1, fx0, fx1, deltax, xi, er })
        }
        i++
    }
    res.json({
        data: result,
    })
}
export const Bi = (req, res) => {
    const data = req.body
    let m = 0
    let i = 0
    let xl = data.xl
    let xr = data.xr
    let ans = data.error
    let e = 1
    let result = []
    let fx = (x) => {
        let a = simplify(data.eq).toString()
        return evaluate(a, { x })
    }
    while (e > ans) {
        m = (xl + xr) / 2
        let root = fx(m)
        let fxr = fx(xr)
        let temp = root * fxr
        if (i == 0) {
            if (temp < 0) {
                xl = m
            }
            if (temp > 0) {
                xr = m
            }
        } else {
            if (temp < 0) {
                e = Math.abs((m - xl) / m).toFixed(6)
                xl = m
            }
            if (temp > 0) {
                e = Math.abs((m - xr) / m).toFixed(6)
                xr = m
            }
        }
        if (i > 0) {
            result.push({ iteration: i, xl, xr, m, e })
        }
        i++
    }

    res.json({ data: result })
}
export const Fa = (req, res) => {
    const data = req.body

    let i = 0
    let xl = data.xl
    let xr = data.xr
    let ans = data.error
    let e = 1
    let result = []
    let fx = (x) => {
        let a = simplify(data.eq).toString()
        return evaluate(a, { x })
    }
    while (e > ans) {
        let sol = (xl * fx(xr) - xr * fx(xl)) / fx(xr) - fx(xl)
        let sol2 = fx(sol)
        if (sol2 >= 0) {
            e = Math.abs((sol - xr) / sol).toFixed(6)
            xr = sol
        } else if (ch < 0) {
            e = Math.abs((sol - xl) / sol).toFixed(6)
            xl = sol
        }

        if (i > 0) {
            result.push({ iteration: i, xl, xr, sol, e })
        }
        i++
    }

    res.json({ data: result })
}
export const One = async (req, res) => {
    const data = req.body
    let result = []
    let x = data.x
    let i = 0
    let xi
    let er = 1
    let ans = data.error
    if (ans == null || ans <= 0) {
        ans = 0.000001
    }
    let fx = (x) => {
        let a = simplify(data.eq).toString()
        return evaluate(a, { x })
    }

    while (er >= ans) {
        if (i > 0) {
            xi = fx(x)
            er = parseFloat(Math.abs((xi - x) / xi).toFixed(5))
            x = xi
            result.push({ iteration: i, x, xi, er })
        }
        i++
    }
    res.json({
        data: result,
    })
}
export const Newton = async (req, res) => {
    const data = req.body
    let result = []
    let x0 = data.x
    let i = 0
    let x2 = 0
    let e = 1
    let ans = data.error
    if (ans == null || ans <= 0) {
        ans = 0.000001
    }
    let fx = (x) => {
        let a = simplify(data.eq).toString()
        return evaluate(a, { x })
    }
    let dif = (x) => {
        let diff = derivative(data.eq, 'x').toString()
        diff = simplify(diff).toString()
        return evaluate(diff, { x })
    }
    while (e > ans) {
        let fxxx = fx(x0)
        let fxx = dif(x0)
        x2 = x0 - fxxx / fxx
        e = parseFloat(Math.abs((x2 - x0) / x2).toFixed(5))
        x0 = x2
        result.push({ iteration: i, x0, fxxx, fxx, x2, e })
        i++
    }
    res.json({
        data: result,
    })
}
export default { Se, Bi, Fa, One, Newton }
