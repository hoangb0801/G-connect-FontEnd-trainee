import { useReducer } from "react";

// bước 1 , xác định giá trị khởi tạo init state
const innitState = 0;
// acstion: có 2 action
const actionUp = "up";
const acstionDown = "down";
// reducer: là 1 hàm, nhận đầu vào là 1 sate hiện tại và 1 action. Môi khi reducer được gọi. thì sẽ dựa vào sate hiện tại và action là gì để quyết định trả về state mới. thường sẽ sử dụng switch case để check action
const reducer = function (state, action) {
    switch (action) {
        case actionUp:
            return state + 1;
        case acstionDown:
            return state - 1;
        default:
            throw new Error("đầu vào lỗi");
    }
}
function UseReducer() {
    // useReducer: là 1 hàm có thể nhận 3 đối số. thường sử sụng 2 đối số. 1 reducer, 2 là initState.
    // khi component được gọi. 
    // - gọi hàm useReducer, nhận reducer nhưng chưa chạy hàm reducer() 
    // - trả về state= initState và dispatch
    // = dispatch là hành động giúp action đc hoạt động
    // dispatch nhận đầu vào là 1 action. dispatch sẽ gọi đến hàm reducer
    //   state được cập nhật thì app sẽ render lại để cập nhật UI

    const [state, dispatch] = useReducer(reducer, innitState);
    function handlTang() {
        dispatch(actionUp);
    }
    function handlGiam() {
        dispatch(acstionDown);

    }

    return (
        <>
            <h2>{state}</h2>
            <button onClick={handlTang}>Tăng</button>
            <button onClick={handlGiam}>Giảm</button>
        </>
    )

}
export default UseReducer;