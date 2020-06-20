## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|varchar|null: false|
|email|varchar|null: false, unique: true|
|encrypted_password|varchar|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :chats


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|varchar|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :chats


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|body|varchar|-------|
|image|text|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user