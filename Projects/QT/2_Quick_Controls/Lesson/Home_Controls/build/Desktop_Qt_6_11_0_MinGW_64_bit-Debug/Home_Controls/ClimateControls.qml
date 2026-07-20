import QtQuick
import QtQuick.Controls.Basic
import QtQuick.Layouts

Page {
    //...
    header: Label {
        text: qsTr("Climate Control")
        color: "white"
        font.pixelSize: 48
        padding: 10
    }

    background: null

    ColumnLayout {
        //...
        ZoneControls {
            id: zone1

            zoneName: "Zone1"
            //...
        }

        ZoneControls {
            id: zone2

            zoneName: "Zone2"
            //...
        }
    }
}
