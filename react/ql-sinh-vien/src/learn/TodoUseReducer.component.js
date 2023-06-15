import { useReducer, useRef } from "react";

// intit

const initState = {
    job: "",
    jobs: ["quet nha", "rua bat"]
}

// actinon
const SET_JOB = "setJob";
const ADD_JOB = "addJob";
const DELETE_JOB = "delJob";

// khi muốn truyền cả dữ liệu qua dispaych
const setJob = function (payload) {
    return {
        type: SET_JOB,
        payload,
    }
}
const deleteJob = function (payload) {
    return {
        type: DELETE_JOB,
        payload
    }
}
const addJob = function (payload) {
    return {
        type: ADD_JOB,
        payload,
    }
}

// reducer
const reducer = function (state, action) {
    console.log(action)
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                job: "",
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            let newJos = [...state.jobs]
            newJos.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJos,

            }
        default:
            throw new Error("hihi")
    }
}

function TodoUseReducer() {
    const ref = useRef();
    const [state, dispatch] = useReducer(reducer, initState);
    console.log(state)
    const { job, jobs } = state;
    console.log(jobs)
    function handlInput(e) {
        console.log(e.target.value)
        dispatch(setJob(e.target.value))


    }
    function handlClick(job) {
        dispatch(addJob(job))
        ref.current.focus();

    }
    function handlDele(index) {
        console.log(index)
        dispatch(deleteJob(index))
    }
    return (
        <>
            <h3>Todo</h3>
            <input value={job}
                ref={ref}
                onChange={handlInput}
                placeholder="Enter todo..." />
            <button onClick={() => handlClick(job)}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => handlDele(index)}>&times;</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
// phân tích. thứ bị thay đổi là các phần tử trong mảng=> nên state là 1 mảng
// thứ bị thay đổi tiếp là input
export default TodoUseReducer;