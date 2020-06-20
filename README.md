## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## messages テーブル ##

|Column|Type|Options|
|------|----|-------|
|dody|text|
|imagre|string|
|grop_id|integer|
|user_id|integer|


### Association
- belongs_to :group
- belongs_to :user