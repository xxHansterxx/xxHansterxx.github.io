// Copyright (C) 2026 Qt Group.
// SPDX-License-Identifier: LicenseRef-Qt-Commercial OR GPL-3.0-only

pragma Singleton
import QtQuick

QtObject {
    property bool stateProperty: false
    property int value: 0
    property bool enabled: false

    signal updated(value: int)
}
