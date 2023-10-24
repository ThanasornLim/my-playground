"use client";

import React from "react";
import { Avatar, Table } from "@mantine/core";
import { User } from "./user.types";
import ReactDataTable from "./components/ReactDataTable";

interface UserProps {
    users: User[];
}

const UserContainer: React.FC<UserProps> = ({ users }) => {
    //     return <GlideDataGrid users={users} />;
    return (
        <div>
            {/* <div className="text-red-200">Hello world</div> */}
            <ReactDataTable users={users} />
        </div>
    );
};

export default UserContainer;
