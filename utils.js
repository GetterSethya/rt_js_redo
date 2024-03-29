function degrees_to_radians(degrees) {
    return (degrees * Math.PI) / 180.0;
}

function random_double() {
    return Math.random();
}

function random_double_mm(min, max) {
    return min + (max - min) * Math.random();
}

function clamp(x, min, max) {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}

function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
