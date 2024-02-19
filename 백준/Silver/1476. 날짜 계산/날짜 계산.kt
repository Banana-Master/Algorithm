import java.io.BufferedReader
import java.io.InputStreamReader

fun main(args: Array<String>) = with(BufferedReader(InputStreamReader(System.`in`))) {
    val (E, S, M) = readLine().split(' ').map { it.toInt() }

    var (year, earth, sun, month) = intArrayOf(1, 1, 1, 1)

    while (true) {
        if (E == earth && S == sun && M == month) {
            break
        }
        year++
        earth++
        sun++
        month++
        if(earth > 15) earth = 1
        if(sun > 28) sun = 1
        if(month > 19) month = 1
    }

    println(year)
}
