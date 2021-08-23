import React , { useState } from 'react';

export default function Info() {

    const [nam, setNam] = useState({name:"" , age:"" , gender:""});
    const [info, setInfo] = useState([]);


    const inpt = (e) => {

        const { name , value } = e.target;
        setNam((j) => ({...j , [name]:value}));
        
    }

    const add = () => {

        setInfo((o) => [...o , nam]);
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
                            <input type="radio" name="gender" onChange={inpt} id="gender_male" value="Male" /><label htmlFor="gender_male"> Male</label>
                            <input type="radio" name="gender" onChange={inpt} id="gender_female" value="Female" /><label htmlFor="gender_female"> Female</label>
                            <input type="radio" name="gender" onChange={inpt} id="gender_others" value="Others" /><label htmlFor="gender_others"> Others</label>
                        </div>
                        <button onClick={add} className="info_btn">Add</button>
                    </div>
                </div>

                {/* card component */}
                <div className="card_wrap">
                    {info.map((k , index) => {
                        return (
                            <div key={index}>
                                <div className="card">
                                    name : {k.name}
                                    age : {k.age}
                                    gender : {k.gender}
                                    <button onClick={ () => setInfo(a => a.filter(( ele , i ) => index!==i)) }>del</button>
                                    <button onClick={() => {
                                        const b = info.filter((d , e) => index===e);
                                        setNam({name:b[0].name , age:parseInt(b[0].age) , gender:b[0].gender});
                                        setInfo(a => a.filter(( ele , i ) => index!==i));
                                    }}>edit</button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )
}
