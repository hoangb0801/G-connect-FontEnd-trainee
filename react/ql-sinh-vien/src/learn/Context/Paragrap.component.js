import { useContext } from "react"
import { ThemeContext } from "../ContextTaiCauTruc.js/ThemContext.js"
function Paragap() {
    const theme = useContext(ThemeContext)
    console.log(theme.theme)     // nhận dữ liệu
    return <div className={theme.theme}>ádasdasdasdasdasdasdasdasdasda</div>


}
export default Paragap