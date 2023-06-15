import { useState } from 'react'
import { ThemeProvider } from './ContextTaiCauTruc.js/ThemContext';
import React from 'react';
import { UseEffect } from './UseEffect.component';
import UseReducer from './UseReducer.component';
import TodoUseReducer from './TodoUseReducer.component';
import AppContext from './Context/AppContext.component';
import FormMutil from './Form.componets';
function Learn() {
    return (
        <>
            {/* <br></br>
            <LearnUseState />
            <br></br>
            <TuNgauNhienTrongMang />
            <TowWayBiding />
            <Radio1 />
            <Checkbox />
            <DropDow />
            <ArraytoArrat />
            <FormInputsTexts />
            <FormInputsTextsFu />

            <Moun /> */}
            {/* <UseEffect />
             */}
            {/* <FromsdiffrentInput />
            < UseReducer />
            <TodoUseReducer />
            <ThemeProvider>
                <AppContext />
            </ThemeProvider> */}

            <FormMutil />

        </>
    )
}

function TowWayBiding() {
    const [person, setPerson] = useState({});    // b1: tạo đối tượng sẽ lưu các giá trị thay đổi
    const handle = (e) => {
        let value = e.target.value;             // lấy value và gán vào biến
        let name = e.target.name;
        setPerson(ob => ({ ...ob, [name]: value })) //  gán các biến vào đối tượng
    }

    const handleClick = () => {
        console.log(person)
    }

    return (
        <div>
            <br />
            <label>{"nhập dữ liệu: "}</label>
            <input
                value={person.value}
                onChange={handle}                 //B1: gọi hàm handle để nhận dữ liệu mỗi khi value input thay đổi
                name='name'
            ></input>
            <input
                value={person.value}
                type='text'
                name='email'
                onChange={handle}
            >
            </input>
            <button onClick={handleClick}>handle</button>

        </div>
    )



}

function LearnUseState() {
    // sử dụng State để tăng số và hiển thị nó
    const [state, setState] = useState(1)      // sử dụng React. biến thay đổi UI tự động thay đổi
    function click() {

        // console.log(num)                                 // cách thông thường sử dụng HTML DOM
        // var count = document.getElementById("hi");
        // count.innerText = num
        // console.log(count)
        // num++
        setState(state + 1)
    }
    return (
        <>
            <label id="hi">{state}</label>
            <button onClick={click} >click me</button>
        </>
    )
}
const array = ["BMW", "Vin", "Audi"]
function TuNgauNhienTrongMang() {
    const [name, setName] = useState()            // vì name sẽ thay đổi nên ta dùng useState

    const handle = () => {
        let index = Math.floor(Math.random() * array.length);
        setName(array[index])
    }
    return (
        <div>
            <label>{name || "vui lòng chọn"}</label>
            <button onClick={handle}>clcik</button>
        </div>

    )
}



function Radio1() {
    let gioitinh1 = "Nam";
    const handleRadio = (e) => {
        gioitinh1 = e.target.value
        console.log(gioitinh1)
    }
    return (
        <div onChange={handleRadio}>
            <label>
                <input type='radio' value={"Nam"} defaultChecked name='gioitinh' />
                Nam
            </label>
            <label>
                <input type='radio' value={"nu"} name="gioitinh" />
                Nu
            </label>
        </div>

    )

}
const gen = [{ id: 0, gioiTinh: 'Nam' }, { id: 1, gioiTinh: 'Nu' }, { id: 2, gioiTinh: 'Khac' }]
// ý tưởng: tạo 1 mảng chứa các đối tượng giới tính. lặp qua mảng để tạo UI các lựa chọn giới tính. khi có thay đổi lựa chọn giới tính. thì chuyền giới tính sang phần sử lý.
// Tạo mảng check. Nếu mảng check chứa giới tính thì không có trong mảng thì thêm giới tính vào mảng. nếu giới tính đã tồn tại trong mảng thì
function Checkbox() {

    const [check, setCheck] = useState([])
    console.log(check)
    const handleChecbox = (gioiTinh) => {
        let checked = check.includes(gioiTinh)

        if (!checked) {
            setCheck(precheck => [...precheck, gioiTinh])

        }
        else {
            setCheck(precheck => precheck.filter(gt => gt !== gioiTinh))
        }

    }

    return (
        <div>
            {gen.map(gt => <label key={gt.id}>
                <input
                    type='checkbox'
                    onChange={() => handleChecbox(gt.gioiTinh)}
                />
                {gt.gioiTinh}
            </label>)}
        </div>
    )

}
function DropDow() {
    const [myCar, setMyCar] = useState("");
    console.log(myCar)
    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="">--Chon Khoa---</option>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}
////
//// Anh xa mangr cuar mang
const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
]
function ArraytoArrat() {
    const Skill = ({ skill: [tech, level] }) => (
        <li>
            {tech} {level}
        </li>
    )
    const Skills = ({ skills }) => {
        const skillsList = skills.map((skill, index) => <Skill key={index} skill={skill} />)
        console.log(skillsList)
        return <ul>{skillsList}</ul>
    }
    return (
        <div className='container'>
            <div>
                <h1>Skills Level</h1>
                <Skills skills={skills} />
            </div>
        </div>

    )

}

const options = [
    {
        value: '',
        label: '-- Select Country--',
    },
    {
        value: 'Finland',
        label: 'Finland',
    },
    {
        value: 'Sweden',
        label: 'Sweden',
    },
    {
        value: 'Norway',
        label: 'Norway',
    },
    {
        value: 'Denmark',
        label: 'Denmark',
    },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }, index) => (
    <option key={index} value={value}> {label}</option>
))
class FormInputsTexts extends React.Component {
    // declaring initial state
    state = {
        firstName: '',
        lastName: '',
        country: '',
        title: '',
    }
    handleChange = (e) => {
        /*
        we can get the name and value like this: e.target.name, e.target.value
        but we can also destructure  name and value from e.target
        const name = e.target.name
        const value = e.target.value
        */
        const { name, value } = e.target
        // [variablename] to use a variable name as a key in an object
        // name refers to the name attribute of the input elements
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        /* 
         e.preventDefault()
          stops the default behavior of form element
         specifically refreshing of page
         */
        e.preventDefault()

        /*
         the is the place where we connect backend api 
         to send the data to the database
         */

        console.log(this.state)
    }

    render() {
        // accessing the state value by destrutcturing the state
        const { firstName, lastName, title, country } = this.state
        return (
            <div className='App'>
                <h3>Add Student class</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            value={firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='country'
                            placeholder='Country'
                            value={country}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='title'
                            placeholder='Title'
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        )
    }
}

function FormInputsTextsFu() {
    const [user, setUser] = useState({})
    function handleChange(e) {
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target                //  destrutcturing
        setUser(pre => ({ ...pre, [name]: value }))

    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(user)

    }

    return (
        <div className='App'>
            <h3>Add Student function</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        value={user.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={user.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='country'
                        placeholder='Country'
                        value={user.scountry}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={user.title}
                        onChange={handleChange}
                    />
                </div>

                <button className='btn btn-success'>Submit</button>
            </form>
        </div>

    )
}
class FromsdiffrentInput extends React.Component {
    // declaring state
    state = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
            html: false,
            css: false,
            javascript: false,
        },
    }
    handleChange = (e) => {
        const { name, value, type, checked } = e.target
        if (type === 'checkbox') {
            this.setState({
                skills: { ...this.state.skills, [name]: checked },
            })
            console.log(skills);
        } else if (type === 'file') {
            console.log(type, 'cehck here')
            this.setState({ [name]: e.target.files[0] })
        } else {
            this.setState({ [name]: value })
        }
    }
    handleSubmit = (e) => {
        /*
        // bỏ submit mặc định
        */
        e.preventDefault()
        const {
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills,
        } = this.state

        const formattedSkills = []
        console.log(skills)
        for (const key in skills) {
            console.log(key)
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase())
            }
        }
        const data = {
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills: formattedSkills,
        }
        /*
         the is the place where we connect backend api 
         to send the data to the database
         */
        console.log(data)
    }

    render() {
        // accessing the state value by destrutcturing the state
        const {
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
        } = this.state
        return (
            <div className='App'>
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name </label>
                            <input
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={this.handleChange}
                                placeholder='First Name'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name </label>
                            <input
                                type='text'
                                name='lastName'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder='Last Name'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email </label>
                            <input
                                type='email'
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                                placeholder='Email'
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='tel'>Telephone </label>
                        <input
                            type='tel'
                            name='tel'
                            value={tel}
                            onChange={this.handleChange}
                            placeholder='Tel'
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='dateOfBirth'>Date of birth </label>
                        <input
                            type='date'
                            name='dateOfBirth'
                            value={dateOfBirth}
                            onChange={this.handleChange}
                            placeholder='Date of Birth'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='favoriteColor'>Favorite Color</label>
                        <input
                            type='color'
                            id='color'
                            name='color'
                            value={favoriteColor}
                            onChange={this.handleChange}
                            placeholder='Favorite Color'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='weight'>Weight </label>
                        <input
                            type='number'
                            id='weight'
                            name='weight'
                            value={weight}
                            onChange={this.handleChange}
                            placeholder='Weight in Kg'
                        />
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label> <br />
                        <select name='country' onChange={this.handleChange} id='country'>
                            {selectOptions}
                        </select>
                    </div>

                    <div>
                        <p>Gender</p>
                        <div>
                            <input
                                type='radio'
                                id='female'
                                name='gender'
                                value='Female'
                                onChange={this.handleChange}
                                checked={gender === 'Female'}
                            />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <div>
                            <input
                                id='male'
                                type='radio'
                                name='gender'
                                value='Male'
                                onChange={this.handleChange}
                                checked={gender === 'Male'}
                            />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div>
                            <input
                                id='other'
                                type='radio'
                                name='gender'
                                value='Other'
                                onChange={this.handleChange}
                                checked={gender === 'Other'}
                            />
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>

                    <div>
                        <p>Select your skills</p>
                        <div>
                            <input
                                type='checkbox'
                                id='html'
                                name='html'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='html'>HTML</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                id='css'
                                name='css'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='css'>CSS</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                id='javascript'
                                name='javascript'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='javascript'>JavaScript</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='bio'>Bio</label> <br />
                        <textarea
                            id='bio'
                            name='bio'
                            value={bio}
                            onChange={this.handleChange}
                            cols='120'
                            rows='10'
                            placeholder='Write about yourself ...'
                        />
                    </div>

                    <div>
                        <input type='file' name='file' onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
function Moun() {
    const [check, setCheck] = useState(true)
    function show() {
        setCheck(!check);

    }
    return (
        <>
            <button onClick={show}>show</button>
            {check && <Content />}
        </>
    )
}
function Content() {
    return <h2>hỉa</h2>
}

export default Learn;