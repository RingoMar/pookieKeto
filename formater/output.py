import tkinter as tk
from tkinter import messagebox as msg
from tkinter.ttk import Notebook
from tkinter import ttk
import requests


class LanguageTab(ttk.Frame):
    def __init__(self, master, lang_name, lang_code):
        super().__init__(master)

        self.lang_name = lang_name
        self.lang_code = lang_code

        self.translation_var = tk.StringVar(self)
        self.translation_var.set("")

        self.translated_label = ttk.Label(
            self, textvar=self.translation_var, anchor="center")

        self.copy_button = ttk.Button(
            self, text="Copy to Clipboard", command=self.copy_to_clipboard)

        self.copy_button.pack(side=tk.BOTTOM, fill=tk.X)
        self.translated_label.pack(side=tk.TOP, fill=tk.BOTH, expand=1)

    def copy_to_clipboard(self):
        root = self.winfo_toplevel()
        root.clipboard_clear()
        root.clipboard_append(self.translation_var.get())


class NewLanguageForm(tk.Toplevel):
    def __init__(self, master):
        super().__init__()

        self.master = master

        self.title("Add new Language")
        self.geometry("300x150")

        self.name_label = ttk.Label(
            self, text="Language Name", anchor="center")
        self.name_entry = ttk.Entry(self)
        self.code_label = ttk.Label(
            self, text="Language Code", anchor="center")
        self.code_entry = ttk.Entry(self)
        self.submit_button = ttk.Button(
            self, text="Submit", command=self.submit)

        self.name_label.pack(fill=tk.BOTH, expand=1)
        self.name_entry.pack(fill=tk.BOTH)
        self.code_label.pack(fill=tk.BOTH, expand=1)
        self.code_entry.pack(fill=tk.BOTH, expand=1)
        self.submit_button.pack(fill=tk.X)

    def submit(self):
        lang_name = self.name_entry.get()
        lang_code = self.code_entry.get()

        if lang_name and lang_code:
            new_tab = LanguageTab(self.master, lang_name, lang_code)
            self.master.languages_menu.add_command(
                label=lang_name, command=lambda: self.master.add_new_tab(new_tab))
            msg.showinfo("Language Option Added",
                         "Language option " + lang_name + " added to menu")
            self.destroy()
        else:
            msg.showerror("Missing Information",
                          "Please add both a name and code")


class TranslateBook(tk.Tk):
    def __init__(self):
        super().__init__()

        self.title("Translation Book v3")
        self.geometry("500x300")
        self.notebook = Notebook(self)

        self.language_tabs = []

        english_tab = ttk.Frame(self.notebook)

        self.translate_button = ttk.Button(
            english_tab, text="Translate", command=self.translate)
        self.translate_button.pack(side=tk.BOTTOM, fill=tk.X)

        self.english_entry = tk.Text(english_tab, bg="white", fg="black")
        self.english_entry.pack(side=tk.TOP, expand=1)

        self.notebook.add(english_tab, text="Input Text")

        self.notebook.pack(fill=tk.BOTH, expand=1)

    def translate(self, text=None):

        if not text:
            text = self.english_entry.get(1.0, tk.END).strip()
        daout = ""
        try:
            for language in self.language_tabs:
                fsd = text.split("\n")
                for line in fsd:
                    daout += '"{}",\n'.format(line)
                    print('"{}",'.format(line.replace("\n", "")))
                print(daout)
                language.translation_var.set(daout)
        except Exception as e:
            msg.showerror("Translation Failed", str(e))

    def add_new_tab(self, tab):
        self.language_tabs.append(tab)
        self.notebook.add(tab, text=tab.lang_name)

        try:
            self.languages_menu.entryconfig(tab.lang_name, state="disabled")
        except:
            # language isn't in menu.
            pass

    def show_new_language_popup(self):
        NewLanguageForm(self)


if __name__ == "__main__":
    translatebook = TranslateBook()
    italian_tab = LanguageTab(translatebook, "Ouput Text", "it")
    translatebook.add_new_tab(italian_tab)
    translatebook.mainloop()
