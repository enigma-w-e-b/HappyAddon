export class LoadUsersController {
    constructor(loadUser) {
        this.loadUser = loadUser;
    }
    exec() {
        try {
            const users = this.loadUser.load();
            return {
                status: 200,
                users,
            };
        }
        catch (e) {
            return {
                status: 500,
                msg: e,
            };
        }
    }
}
// data
export class LoadUsers {
    constructor() { }
    load() {
        return [
            {
                name: "any_name",
                idade: 10,
                pontos: 10,
                numero: 10,
            },
            {
                name: "any_name",
                idade: 11,
                pontos: 12,
                numero: 13,
            },
        ];
    }
}
// factories
export const makeLoadUsers = () => {
    const loadUsers = new LoadUsers();
    return loadUsers;
};
export const makeLoadUsersFactory = () => {
    const loadUsers = new LoadUsersController(makeLoadUsers());
};
// seu commando: makeLoadUsersFactory()

//# sourceMappingURL=../../../../_HappyDebug/presentation/controllers/load-users-controller.js.map
