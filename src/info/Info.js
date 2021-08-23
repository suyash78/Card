import React , { useState } from 'react';
import './info.css';

export default function Info() {

    const [nam, setNam] = useState({name:"" , age:"" , gender:""});
    const [info, setInfo] = useState([]);
    const [ind, setInd] = useState();
    const [status, setStatus] = useState(0)

    const inpt = (e) => {

        const { name , value } = e.target;
        setNam((j) => ({...j , [name]:value}));
        
    }

    const add = () => {

        if(info.length >= ind+1) {
            info[ind] = nam;
            setStatus(0);
        } else { setInfo((o) => [...o , nam]); }
        setNam({name:"" , age:"" , gender:""});
        
    }
    
    return (
        <>
            <div className="main_wrap">

                {/* form component */}
                <div className="info_wrap">
                    <div className="info_card">
                        <input type="text" className="info_input" value={nam.name} onChange={inpt} name="name" placeholder="Name" />
                        <input type="number" className="info_input" value={nam.age} onChange={inpt} name="age" placeholder="Age" />
                        <div className="info_radio_wrap">
                            <div><input type="radio" name="gender" onChange={inpt} id="gender_male" value="Male" /><label htmlFor="gender_male"> Male</label></div>
                            <div><input type="radio" name="gender" onChange={inpt} id="gender_female" value="Female" /><label htmlFor="gender_female"> Female</label></div>
                            <div><input type="radio" name="gender" onChange={inpt} id="gender_others" value="Others" /><label htmlFor="gender_others"> Others</label></div>
                        </div>
                        <button onClick={add} className="info_btn"> {(status === 0) ? "Add" : "Update"} </button>
                    </div>
                </div>

                {/* card component */}
                <div className="card_wrap">
                    {info.map((k , index) => {
                        
                        return (
                            <div key={index}>
                                <div className="card">
                                    Name : {k.name}&nbsp;|&nbsp;
                                    Age : {k.age}&nbsp;|&nbsp;
                                    Gender : {k.gender}
                                    <button className="vtn del" onClick={ () => setInfo(a => a.filter(( ele , i ) => index!==i)) }>Delete</button>
                                    <button className="vtn upd" onClick={() => {
                                        const b = info.filter((d , e) => index===e);
                                        setNam({name:b[0].name , age:parseInt(b[0].age) , gender:b[0].gender});
                                        setInd(index);
                                        setStatus(1);
                                    }}>Edit</button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )

    
}
