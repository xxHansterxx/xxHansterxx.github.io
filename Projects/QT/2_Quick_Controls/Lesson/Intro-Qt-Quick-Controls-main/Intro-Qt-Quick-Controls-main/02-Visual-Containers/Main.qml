// Copyright (C) 2026 Qt Group.
// SPDX-License-Identifier: LicenseRef-Qt-Commercial OR GPL-3.0-only

import QtQuick
import QtQuick.Controls.Basic

ApplicationWindow {
    id: window

    width: 1024
    height: 800
    visible: true
    title: qsTr("Home Controls")

    font.pixelSize: 24

    background: Image {
        fillMode: Image.PreserveAspectCrop
        source: Qt.resolvedUrl("assets/BrushedMetal.jpg")
    }

    ClimateControls {
        anchors.fill: parent
    }
}
