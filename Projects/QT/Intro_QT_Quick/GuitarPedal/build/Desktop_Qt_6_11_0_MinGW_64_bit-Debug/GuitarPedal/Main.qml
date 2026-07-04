import QtQuick

Window {
    minimumWidth: 260
    minimumHeight: 280
    maximumWidth:  minimumWidth
    maximumHeight: minimumHeight
    visible: true
    title: qsTr("Guitar Pedal")

    Image {
        id: pedalBackground
        source: "assets/Guitar-Pedal-Background.png"
        anchors.fill: parent
    }
}
