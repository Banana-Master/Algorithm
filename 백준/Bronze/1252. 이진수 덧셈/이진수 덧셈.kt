import java.io.BufferedReader
import java.io.InputStreamReader

fun main(args: Array<String>) = with(BufferedReader(InputStreamReader(System.`in`))) {
    var (num1, num2) = readLine().split(' ').map { it.toBigInteger(2) }
    println((num1 + num2).toString(2))
}

