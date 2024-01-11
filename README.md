<a name="readme-top"></a>

# AirBnB clone v4

AirBnB clone v4 is an enhanced version of the [previous iteration](https://github.com/uosyph/AirBnB_clone_v3), introducing new functionalities and improvements.
Like its predecessor, it retains the command-line interface and utilizes object-oriented programming to efficiently manage data. However, in this version, the project expands its capabilities with the following new features:

- **Dynamic web pages using jQuery**: AirBnB clone v4 now features dynamic web pages, which provide a more user-friendly and engaging experience than the static web pages of the previous version. jQuery is used to facilitate seamless interaction between the user and the application, allowing for real-time updates and feedback.
- **Caching for improved performance**: Caching is now utilized to reduce the number of database queries that need to be executed, resulting in improved performance. This is especially beneficial for complex applications with large amounts of data.
- **uuid library for enhanced security**: The uuid library is now used to generate unique identifiers for database records, web pages, and other objects. This enhances the overall security of the application by preventing collisions and unauthorized access.

Overall, AirBnB clone v4 provides a more user-friendly, efficient, and secure platform for managing accommodations.

## Table of Contents

-   [Requeriments](#requeriments)
-   [Installation](#installation)
-   [Testing](#testing)
-   [Console Commands](#console-commands)
-   [Commands Usage](#commands-usage)
-   [Usage Examples](#usage-examples)
    -   [Interactive Mode](#interactive-mode)
    -   [Non-Interactive Mode](#non-interactive-mode)
-   [Author](#author)

## Requirements

You need to have Python and Python-lxml installed.

To install Python on Arch-based systems:

```bash
sudo pacman -S python python3-lxml
```

To install Python on Debian-based systems:

```bash
sudo apt-get install python python3-lxml
```

You also need to install the following packages:

- mysqlclient
- sqlalchemy
- Flask
- flask_cors
- flasgger

To install these packages, run the following command:

```sh
pip install mysqlclient sqlalchemy Flask flask_cors flasgger
```

## Installation

Start using the console

Clone the repository:

```bash
git clone https://github.com/uosyph/AirBnB_clone_v4
```

Move in to the directory:

```bash
cd AirBnB_clone_v4
```

Execute the console:

```bash
AirBnB_clone$ python console.py
```

Or:

```bash
AirBnB_clone$ ./console.py
```

## Testing

There are test cases for all classes, methods, etc.

To run the tests:

```bash
python -m unittest discover tests
```

To run the tests in non-interactive mode:

```bash
echo "python -m unittest discover tests" | bash
```

To run a specific test file:

```bash
python -m unittest tests/test_models/test_base_model.py
```

## Console Commands

The commands available for this command interpreter are:
|Command|Description|
|---|---|
|__create__|Creates a new instance.|
|__show__|Prints the string representation of an instance.|
|__destroy__|Deletes an instance based on the class name.|
|__all__|Prints string represention of all instances of a given class.|
|__update__|Updates an instance based on the class name and id.|
|__help__|Shows all commands or displays information about a specific command.|
|__quit__|Exits the console.|
|__EOF__|Exits the console.|

## Commands Usage

The commands available for this command interpreter are:
|Command|Description|
|---|---|
|__create__|_create_ &lt;class_name&gt;|
|__show__|_show_ &lt;class_name&gt; &lt;object_id&gt;<br>&lt;class_name&gt;._show_(&lt;object_id&gt;)()|
|__destroy__|_destroy_ &lt;class_name&gt; &lt;object_id<br>&lt;class_name&gt;._destroy_(&lt;object_id&gt;)()|
|__all__|_all_ &lt;class_name&gt;<br>&lt;class_name&gt;._all_()|
|__update__|_update_ &lt;class_name&gt; &lt;object_id&gt; &lt;attribute name&gt; "&lt;attribute value&gt;"<br>&lt;class name&gt;._update_(&lt;object_id&gt;, &lt;attribute name&gt;, &lt;attribute value&gt;)<br>&lt;class name&gt;._update_(&lt;object_id&gt;, &lt;dictionary representation&gt;)|
|__help__|_help_<br>_help_ &lt;command_name&gt;|
|__quit__|_quit_|
|__EOF__|_EOF_<br>_CTRL+D_|

## Usage Examples

### Interactive Mode

Example 1: Using create, count and all commands:

```bash
AirBnB_clone$ python console.py
(hbnb) all
[]
(hbnb) create Place
f6afd74b-cb6f-45bb-8867-cf73111648ec
(hbnb) create BaseModel
58e430d1-3518-4202-ac4d-5227e5b1d351
(hbnb) BaseModel.count()
1
(hbnb) all
["[Place] (f6afd74b-cb6f-45bb-8867-cf73111648ec) {'id': 'f6afd74b-cb6f-45bb-8867-cf73111648ec', 'created_at': datetime.datetime(2023, 7, 16, 23, 2, 21, 946784), 'updated_at': datetime.datetime(2023, 7, 16, 23, 2, 21, 946784)}", "[BaseModel] (58e430d1-3518-4202-ac4d-5227e5b1d351) {'id': '58e430d1-3518-4202-ac4d-5227e5b1d351', 'created_at': datetime.datetime(2023, 7, 16, 23, 2, 34, 299874), 'updated_at': datetime.datetime(2023, 7, 16, 23, 2, 34, 299874)}"]
(hbnb)
```

Example 2: Using basic update with an Id and show command:

```bash
(hbnb) update BaseModel 58e430d1-3518-4202-ac4d-5227e5b1d351 first_name "Value"
(hbnb) show BaseModel 58e430d1-3518-4202-ac4d-5227e5b1d351
[BaseModel] (58e430d1-3518-4202-ac4d-5227e5b1d351) {'id': '58e430d1-3518-4202-ac4d-5227e5b1d351', 'created_at': datetime.datetime(2023, 7, 16, 23, 2, 34, 299874), 'updated_at': datetime.datetime(2023, 7, 16, 23, 2, 34, 299874), 'first_name': 'Value'}
(hbnb) show Place f6afd74b-cb6f-45bb-8867-cf73111648ec
[Place] (f6afd74b-cb6f-45bb-8867-cf73111648ec) {'id': 'f6afd74b-cb6f-45bb-8867-cf73111648ec', 'created_at': datetime.datetime(2023, 7, 16, 23, 2, 21, 946784), 'updated_at':
datetime.datetime(2023, 7, 16, 23, 2, 21, 946784)}
(hbnb)
```

Example 3: Using update with a dictionary:

```bash
(hbnb) BaseModel.update("58e430d1-3518-4202-ac4d-5227e5b1d351", {'first_name': "yousef", 'age': 21})
(hbnb) show BaseModel 58e430d1-3518-4202-ac4d-5227e5b1d351
[BaseModel] (58e430d1-3518-4202-ac4d-5227e5b1d351) {'id': '58e430d1-3518-4202-ac4d-5227e5b1d351', 'created_at': datetime.datetime(2023, 7, 16, 23, 2, 34, 299874), 'updated_at': datetime.datetime(2023, 7, 16, 23, 2, 34, 299874), 'first_name': 'yousef', 'age': 21}
(hbnb)
```

Example 4: Using destroy and count command:

```bash
(hbnb) BaseModel.destroy("58e430d1-3518-4202-ac4d-5227e5b1d351")
(hbnb) all
["[Place] (f6afd74b-cb6f-45bb-8867-cf73111648ec) {'id': 'f6afd74b-cb6f-45bb-8867-cf73111648ec', 'created_at': datetime.datetime(2023, 7, 16, 23, 2, 21, 946784), 'updated_at': datetime.datetime(2023, 7, 16, 23, 2, 21, 946784)}"]
(hbnb) quit
AirBnB_clone$
```

### Non-Interactive Mode

```bash
AirBnB_clone$ echo "create User" | ./console.py
(hbnb) 5101c62f-88dc-4765-a072-a58c750f9ca5
AirBnB_clone$ echo "show User 5101c62f-88dc-4765-a072-a58c750f9ca5" | ./console.py
(hbnb) [User] (5101c62f-88dc-4765-a072-a58c750f9ca5) {'id': '5101c62f-88dc-4765-a072-a58c750f9ca5', 'created_at': datetime.datetime(2023, 7, 16, 23, 12, 41, 102504), 'updated_at': datetime.datetime(2023, 7, 16, 23, 12, 41, 103200)}
AirBnB_clone$
```

## Author

[Yousef Saeed](https://github.com/uosyph)

<p align="right"><a href="#readme-top">Back to Top</a></p>
