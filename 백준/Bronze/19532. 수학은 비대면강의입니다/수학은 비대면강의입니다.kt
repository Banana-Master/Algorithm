import java.io.BufferedReader
import java.io.InputStreamReader

operator fun <T> List<T>.component6(): T {
    return get(5)
}

fun main(args: Array<String>) = with(BufferedReader(InputStreamReader(System.`in`))) {
    val (a, b, c, d, e, f) = readLine().split(' ').map { it.toInt() }
    val x = (c * e - b * f) / (a * e - b * d);
    val y = (c * d - a * f) / (b * d - a * e);
    println("$x $y")
}
