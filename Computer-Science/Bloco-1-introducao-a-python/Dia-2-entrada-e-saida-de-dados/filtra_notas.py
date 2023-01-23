not_filtered_notes = "notas.txt"
filtered_notes_file_name = "notas_filtradas.txt"

with open(not_filtered_notes, mode="r") as not_filtered_file:
    already_read_file = not_filtered_file.read().splitlines()

    all_students = [student.split(' ') for student in already_read_file]

    not_approved_students = []

    for name, note in all_students:
        if int(note) < 6:
            not_approved_students.append(f"{name}\n")

    filtered_students = open(filtered_notes_file_name, mode="w")
    filtered_students.writelines(not_approved_students)
    filtered_students.close()


not_filtered_file.close()
