import java.io.BufferedReader
import java.io.InputStreamReader

fun main(args: Array<String>) = with(BufferedReader(InputStreamReader(System.`in`))) {
    val n = readLine().toInt()
    val studentList = readLine().split(' ')
    val studentCount = mutableMapOf<String, Int>()

    for (i in 0 until n) {
        studentCount[studentList[i]] = 0
    }

    for (i in 0 until n) {
        val input = readLine().split(' ')
        for (s in input) {
            studentCount[s] = studentCount[s]!! + 1
        }
    }

    val sortedStudentCount = studentCount.entries.sortedByDescending { it.value }

    println(sortedStudentCount.joinToString("\n") { "${it.key} ${it.value}" })
}
