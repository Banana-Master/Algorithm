class Solution {
    public int solution(String skill, String[] skill_trees) {
        int count = 0;

        for (String tree : skill_trees) {
            boolean isValid = true;
            int skillIndex = 0;

            for (char c : tree.toCharArray()) {
                int index = skill.indexOf(c);
                if (index == -1) continue;

                if (index == skillIndex) {
                    skillIndex++;
                } else {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                count++;
            }
        }

        return count;
    }
}