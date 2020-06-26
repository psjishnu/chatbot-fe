import React, { useEffect, useState } from "react";
import { navigate, A } from "hookrouter";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../../Redux/actions";
export default function Homepage() {
    const dispatch = useDispatch();

    const item = [
        { name: "survey 1", id: "1" },
        { name: "survey 2", id: "2" },
        { name: "survey 3", id: "3" },
        { name: "survey 4", id: "4" },
        { name: "survey 5", id: "5" },
    ];
    useEffect(() => {
        dispatch(getSurvey()).then((res) => {
            console.log("jishnu", res);
        });
    }, []);
    return (
        <div className="my-20">
            <div className="flex bg-red-200 px-2 py-3 flex-col mt-20 mb-20 sm:w-full rounded  lg:w-1/2 md:w-3/4  m-0 m-auto mt-10 ">
                <div className="grid grid-cols-3">
                    {item.map((value, index) => {
                        return (
                            <A
                                className="bg-red-400 my-4 w-md mx-1 px-3 lg:mx-3 py-2 lg:text-lg text-center rounded text-md "
                                href={`/ashaworker/form/${value.id}`}
                                key={index}>
                                {value.name}
                            </A>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}