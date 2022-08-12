import { useState } from "react";
import data from "./data";

function App() {
    const [division, setDivision] = useState("");
    const [district, setDistrict] = useState("");

    return (
        <div>
            <div>
                <select onChange={(e) => setDivision(e.target.value)}>
                    {Object.keys(data).map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div>
                <select
                    disabled={division ? false : true}
                    onChange={(e) => setDistrict(e.target.value)}
                >
                    {division ? (
                        Object.keys(data[division]).map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    ) : (
                        <option value="">Select District</option>
                    )}
                </select>
            </div>
            <div>
                <select
                    disabled={district ? false : true}
                    onChange={(e) => setUpazila(e.target.value)}
                >
                    {district ? (
                        data[division][district]?.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    ) : (
                        <option value="">Select District</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default App;
