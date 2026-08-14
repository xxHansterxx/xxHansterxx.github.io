/****************************************************************************
** Generated QML type registration code
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include <QtQml/qqml.h>
#include <QtQml/qqmlmoduleregistration.h>

#if __has_include(<Chapter.h>)
#  include <Chapter.h>
#endif


#if !defined(QT_STATIC)
#define Q_QMLTYPE_EXPORT Q_DECL_EXPORT
#else
#define Q_QMLTYPE_EXPORT
#endif
Q_QMLTYPE_EXPORT void qml_register_types_E_Book()
{
    qmlRegisterModule("E_Book", 254, 0);
    QT_WARNING_PUSH QT_WARNING_DISABLE_DEPRECATED
    qmlRegisterTypesAndRevisions<Chapter>("E_Book", 254);
    QT_WARNING_POP
    qmlRegisterModule("E_Book", 254, 254);
}

static const QQmlModuleRegistration eBookRegistration("E_Book", qml_register_types_E_Book);
