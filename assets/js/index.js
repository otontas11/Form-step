function maxLengthCheck(object, length) {
    if (object.value.length > length)
        object.value = object.value.slice(0, length)
}
