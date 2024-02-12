import java.io.BufferedReader
import java.io.InputStreamReader

fun main(args: Array<String>) = with (BufferedReader(InputStreamReader(System.`in`))) {
    println( readLine().split(' ').map { it.toInt() }.let { (it[0] + it[1]) * (it[0] - it[1]) })

}