import java.io.BufferedReader
import java.io.InputStreamReader

//operator fun <T> List<T>.component6(): T {
//    return get(5)
//}

fun main(args: Array<String>) = with(BufferedReader(InputStreamReader(System.`in`))) {
    val n = readLine().toInt()
    val arr = readLine().split(' ').map { it.toInt() }
    var min = arr[0]
    var num = arr[0]
    var result = 0
    arr.forEach{ item ->
        if(min != item) {
            if(num + 1 == item) {
                num += 1
            } else {
                result += min
                min = item
                num = item
            }
        }
    }

    println(result + min)
}
