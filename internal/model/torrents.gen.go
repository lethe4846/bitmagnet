// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

import (
	"time"
)

const TableNameTorrent = "torrents"

// Torrent mapped from table <torrents>
type Torrent struct {
	InfoHash     Hash20                  `gorm:"column:info_hash;primaryKey;<-:create" json:"infoHash"`
	Name         string                  `gorm:"column:name;not null" json:"name"`
	Size         uint64                  `gorm:"column:size;not null" json:"size"`
	Private      bool                    `gorm:"column:private;not null" json:"private"`
	SingleFile   NullBool                `gorm:"column:single_file" json:"singleFile"`
	Extension    NullString              `gorm:"column:extension;<-:false" json:"extension"`
	PieceLength  NullUint64              `gorm:"column:piece_length" json:"pieceLength"`
	Pieces       []byte                  `gorm:"column:pieces" json:"-"`
	SearchString string                  `gorm:"column:search_string;not null" json:"searchString"`
	CreatedAt    time.Time               `gorm:"column:created_at;not null;<-:create" json:"createdAt"`
	UpdatedAt    time.Time               `gorm:"column:updated_at;not null" json:"updatedAt"`
	Contents     []TorrentContent        `gorm:"foreignKey:InfoHash" json:"contents"`
	Sources      []TorrentsTorrentSource `gorm:"foreignKey:InfoHash" json:"sources"`
	Files        []TorrentFile           `gorm:"foreignKey:InfoHash" json:"files"`
}

// TableName Torrent's table name
func (*Torrent) TableName() string {
	return TableNameTorrent
}