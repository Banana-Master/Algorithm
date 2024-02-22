import java.io.BufferedReader
import java.io.InputStreamReader

// kotlinc -include-runtime -d output.jar main.kt
// java -jar output.jar

fun main() = with(BufferedReader(InputStreamReader(System.`in`))) {
    val t = readLine().toInt()
    var result = ""
    for(i in 1..t) {
        val arr = readLine().trim().toCharArray()
        val first = arr[0]
        val last = arr[arr.size -1]
        result += "$first$last\n"
    }
    println(result)
}

