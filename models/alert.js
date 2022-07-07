class Alert {
    constructor(userId, message, typeId, time, date, lat, lng, status, createdAt) {
        this.id = id;
        this.userId = userId;
        this.message = message;
        this.typeId = typeId;
        this.time = time;
        this.date = date;
        this.lat = lat;
        this.lng = lng;
        this.status = status;
        this.createdAt = createdAt;
    }
}

module.exports = Alert;