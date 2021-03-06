import React from 'react';
import { FirstName, LastName } from './ComC';
import ComB, { MiddleName } from './ComB';

const ComA = () => {
    return(
        <>
            <FirstName.Consumer>
            { (fname) => {
                return(
                    <MiddleName.Consumer>
                        {(mname) => {
                            return (
                                <LastName.Consumer>
                                    {(lname) => {
                                        return (<><h1>My Name is {fname} {mname} {lname}</h1>
                                        <ComB />
                                        </>);
                                    }}

                                </LastName.Consumer>
                            );
                        }}
                    </MiddleName.Consumer>
                );
            }}
            </FirstName.Consumer>
        </>
    );
};

export default ComA;