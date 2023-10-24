import UserContainer from "@/containers/Users/User";
import { User } from "@/containers/Users/user.types";
import { faker } from "@faker-js/faker";
import React from "react";

const getUser = async () => {
    const massiveUsers: User[] = await faker.helpers.multiple(
        (): User => ({
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: faker.image.avatar(),
            age: Math.floor(Math.random() * 60 + 18),
        }),
        { count: 10 }
    );

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });

    return massiveUsers;
};

const HomePage = async () => {
    const userList = await getUser();
    return <UserContainer users={userList} />;
};

export default HomePage;
