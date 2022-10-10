//+ ====================================================================================================================
//+
//+ 6 kyu - extract file name  [ ID: 597770e98b4b340e5b000071 ] (extract-file-name)
//+ URL: https://www.codewars.com/kata/597770e98b4b340e5b000071
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName.replace(/^\d+_([\w-]+)\.([\w-]+)\.[\w-]+$/g, "$1.$2")
  }
}

// =====================================================================================================================
// =====================================================================================================================

class FileNameExtractor2 {
  static extractFileName(dirtyFileName) {
    return dirtyFileName.replace(/^\d+_([\w-]+)\.([\w-]+)\.[\w-]+/g, "$1.$2")
  }
}

module.exports = { FileNameExtractor, FileNameExtractor2 }
