# KMITL_Alert-API

Rest-API สำหรับ KMITL Alert ด้วย Nodejs & Express ฐานข้อมูลที่ใช้ firebase

# Generate new private key บันทึกชื่อเป็น permissions.json วางไว้ในโฟลเดอร์ project
```https://console.firebase.google.com/u/0/project/react-authenic/settings/serviceaccounts/adminsdk```

# Install

- ติดตั้ง Node 16.13.1 สามารถใช้ nvm
- รันคำสั่งเพื่อติดตั้ง และ runserver

```
npm install pm2 -g
npm install
npm start
npm stop
```

# API

## การแจ้งเตือน

```
- เพิ่มรายการใหม่
    /api/alert      [POST]

- แสดงรายการทั้งหมด
    /api/alerts     [GET]

- แสดงรายการทั้งหมดตามชนิด
    /api/alerts/type/:typeId   [GET]

- แสดงรายการตาม id
    /api/alert/<id>  [GET]

- อัพเดตแก้ไขรายการ id
    /api/alert/<id>  [PUT]

- ลบรายการที่เลือก
    /api/alert/<id>   [DELETE]
```

## ชนิดการแจ้งเตือน

- List ประเภทการแจ้งเตือน

```
- แสดงประเภททั้งหมด
    /api/types  [GET]

- เลือกประเภทตาม id
    /api/type/<id>  [GET]
```

## ชื่อผู้ใช้

- List ประเภทการแจ้งเตือน

```

- เพิ่มผู้ใช้ใหม่
    /api/auth/signup   [POST]

{
    "email" : "email@email.com",
    "password" : "password@",
    "displayName" : "KMITL Alert",
    "avatar" : "",
    "status" : "",
    "createdAt" : {}
}

- ลบข้อมูลผู้ใช้
     /api/auth/delete/<id>  [DELETE]

- แสดงรายชื่อผู้ใช้ทั้งหมด
    /api/users  [GET]

- แสดงผูัใช้ตาม id
    /api/user/<id>  [GET]

- แก้ไขข้อมูลผู้ใช้ตาม id
    /api/user/<id>  [PUT]

```
