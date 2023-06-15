
import Content from "./Content.componet";
import { ThemeProvider } from "../ContextTaiCauTruc.js/ThemContext";
// export ThemContext để các childer có thể nhận được
import { useContext } from "react"
import { ThemeContext } from "../ContextTaiCauTruc.js/ThemContext.js"

function AppContext() {
    const context = useContext(ThemeContext)

    return (
        // <ThemeContext.Provider value={theme}>          // sử dụng Provider để bao quanh component cha. giúp chuyền dữ liệu đi. Provider có props là value. tất cả các children của provider đề có thể nhận được value
        //     <div>
        //         <button onClick={ThemeContext.handclick}>togger</button>
        //         <Content theme={theme} />
        //     </div>
        // </ThemeContext.Provider>

        <div>
            <button onClick={context.handlClick}>togger</button>
            <Content />
        </div>



    )

}
export default AppContext;