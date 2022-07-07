class User {
    constructor(id, createdAt, displayName, email, avatar, status) {
        this.id = id;
        this.createdAt = createdAt;
        this.displayName = displayName;
        this.email = email;
        this.avatar = avatar;
        this.status = status;
    }
}

module.exports = User;