// Copyright (C) 2026 Qt Group.
// SPDX-License-Identifier: LicenseRef-Qt-Commercial OR GPL-3.0-only

import QtQuick
import QtQuick.Controls.Basic
import QtQuick.Layouts

ApplicationWindow {
    id: window

    width: 640
    height: 480
    visible: true
    title: qsTr("Chat App")
    color: "#D3D3D3"

    /* Requirements:

    Design and build the basic elements of a chat
    application - focusing on the task of making the design
    responsive rather than making it actually functional.

    Use QUTE Quick Layouts to design a suitable Desktop Layout for your application.
    Using the Layout attached properties such as
    Layout.fillWidth/fillHeight, Layout.alignment,
    Layout.preferredWidth/preferredHeight,
    and Layout.margins to customise the Layouts.

    There should be sections in your application showing
    - the name of the person who you are chatting with
    - a two-way conversation using static “chat bubbles”
    - a text input for writing a potential reply
    - and a send button

    The chat bubble should contain some text, and be
    positioned on the left or right depending on whose chat
    bubble it is, much like popular messaging apps.
    You should consider how to add an alternating color
    for the chat bubbles.

    */

    ListModel {
        id: chatModel
    }

    Rectangle {
        id: whoMessage
        width: 500
        height: 50
        visible: true
        radius: 15
        color: "#181C27"
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.top: parent.top
        anchors.topMargin: 10

        Text {
            id: name
            text: qsTr("Person")
            font.pointSize: 20
            font.bold: true
            anchors.verticalCenter:  parent.verticalCenter
            anchors.horizontalCenter: parent.horizontalCenter
            color: "white"
        }
    }

    Rectangle {
        id: typing
        width: 500
        height: 50
        visible: true
        color: "white"
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: parent.bottom

        Text {
            id: message
            text: qsTr("Your message")
            anchors.verticalCenter:  typing.verticalCenter
            anchors.horizontalCenter: typing.horizontalCenter
        }

        TextInput {
            id: writeMessage
            anchors.fill: parent
            anchors.margins: 10
            font.pointSize: 16

            MouseArea {
                id: messageClick
                anchors.fill: parent
                hoverEnabled: true
                cursorShape: Qt.PointingHandCursor
                propagateComposedEvents: true

                onClicked: {
                    message.visible = false
                    writeMessage.forceActiveFocus()
                }
            }
        }
    }

    Image {
        id: paperclip
        source: "assets/paperclip-solid.png"
        width: 50
        height: 50
        anchors.right: typing.left
        anchors.rightMargin: 10
        anchors.verticalCenter: typing.verticalCenter

        MouseArea {
            id: filesClick
            anchors.fill: parent
            hoverEnabled: true
            cursorShape: Qt.PointingHandCursor
            onClicked: {
                console.log("Files Menu Opened")
            }
        }
    }

    Timer {
        id: replyTimer
        interval: 1000
        repeat: false
        onTriggered: {

            chatModel.insert(0, {"sender": "reply", "msgText": "This is Your response"})
        }
    }

    Image {
        id: send
        source: "assets/paper-plane-regular.png"
        width: 50
        height: 50
        anchors.left: typing.right
        anchors.leftMargin: 10
        anchors.verticalCenter: typing.verticalCenter

        MouseArea {
            id: sendClick
            anchors.fill: parent
            hoverEnabled: true
            cursorShape: Qt.PointingHandCursor

            onClicked: {
                if (writeMessage.text !== "") {
                    chatModel.insert(0, {"sender": "user", "msgText": writeMessage.text})
                    message.visible = true
                    writeMessage.text = ""
                    writeMessage.focus = false
                    replyTimer.start()
                }
            }
        }
    }

    ListView {
        id: chatHistoryView
        anchors.bottom: typing.top
        anchors.bottomMargin: 20
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.top: whoMessage.bottom
        anchors.topMargin: 20
        anchors.leftMargin: 20
        anchors.rightMargin: 20
        spacing: 10
        model: chatModel
        clip: true


        verticalLayoutDirection: ListView.BottomToTop

        delegate: Item {
            width: chatHistoryView.width
            height: innerBubble.height

            Rectangle {
                id: innerBubble
                width: 200
                height: bubbleTextDisplay.implicitHeight + 24
                radius: 15
                border.width: 2
                clip: true

                anchors.right: model.sender === "user" ? parent.right : undefined
                anchors.left: model.sender === "reply" ? parent.left : undefined
                color: model.sender === "user" ? "#5097A4" : "#00A86B"
                border.color: model.sender === "user" ? "#003151" : "#2E8B57"

                Text {
                    id: bubbleTextDisplay
                    anchors.fill: parent
                    anchors.margins: 12
                    font.pointSize: 12
                    color: "black"
                    wrapMode: Text.WrapText
                    text: model.msgText
                }
            }
        }
    }
}
