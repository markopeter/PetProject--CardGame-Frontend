import React, {useEffect, useState} from 'react';
import CardComponent from "./CardComponent";
import axios from "axios";

const SearchCardByName = () => {

    const [inputName, setInputName] = useState("");
    const [cardData, setCardData] = useState({});
    const url = `https://hkk-petproject.herokuapp.com/creature/${inputName}`;
    const searchByName = () => {

        axios.get(url, {params:
                {
                    name : inputName}})
            .then(r => setCardData(r.data));

    }
    useEffect(() => { searchByName()},[]);
    return (
        <div>
            <input  type="text" id="message" name="name"
                   value={inputName}
                   onChange={(event) => setInputName(event.target.value)}
                   autoComplete="off"
            />
            <button onClick={searchByName}>Search ! </button>
            <div>
                <div>
                    <CardComponent{...cardData} />
                </div>
            </div>
        </div>
    );
};

export default SearchCardByName;
