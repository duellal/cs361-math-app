export default function addCommas(numArr) {
    let is_arr = Array.isArray(numArr)

    if (is_arr) {
        return numArr?.map((num) => num.toLocaleString('en-US'))
    }

    return numArr?.toLocaleString('en-US')
}
