// @ts-nocheck
// Migrated from the original MLStudyNest PHP package.
// Keep this file data-only so the Nuxt app can tree-shake UI separately.

export const UNITS = [
  {
    id: "u1",
    label: "Unit 1",
    title: "Cell Cycle & Genetics",
    zh: "细胞周期与遗传学",
    accent: "#c9707a",
  },
  {
    id: "u2",
    label: "Unit 2",
    title: "DNA & Biotech",
    zh: "DNA 与生物技术",
    accent: "#b07a9e",
  },
  {
    id: "u3",
    label: "Unit 3",
    title: "Evolution",
    zh: "进化",
    accent: "#d4707a",
  },
  {
    id: "u4",
    label: "Unit 4",
    title: "Classification & Biodiversity",
    zh: "分类系统与生物多样性",
    accent: "#c9707a",
  },
  {
    id: "u5",
    label: "Unit 5",
    title: "Microbiology",
    zh: "微生物学",
    accent: "#b8647a",
  },
];

// Each topic: heading, zh, big-idea, then "blocks" (concept text + optional table + key terms);

export const TOPICS = {

  u1: [
    {
      id: "u1-cellcycle",
      title: "The Cell Cycle 细胞周期",
      zh: "第一章 · Cell Cycle Overview",
      big: "The cell cycle is the series of stages a cell goes through as it grows and divides. It has two big parts: interphase (G1 → S → G2) and the M phase.",
      bigZh: "细胞周期是细胞生长和分裂经历的一系列阶段:间期(G1→S→G2)+ M期。",
      blocks: [
        {
          type: "ladder",
          items: [
            ["G1 phase 生长期一", "Cell grows; makes proteins & enzymes; preps for DNA copy", "1"],
            ["S phase 合成期", "DNA replicates — each chromosome copied", "2"],
            ["G2 phase 生长期二", "Cell keeps growing; makes mitosis proteins", "3"],
            ["M phase 有丝分裂期", "Cell divides → 2 identical daughter cells", "4"],
          ],
        },
        {
          type: "rules",
          items: [
            ["Interphase 间期", "G1 + S + G2 combined — cell grows & copies DNA", "占周期大部分时间"],
            ["G0 phase G0期", "Resting / specialised — not preparing to divide", "如神经元、肌肉细胞"],
            ["Chromatin 染色质", "DNA in its loose form (during interphase)", "DNA 松弛形态"],
            ["Chromosome 染色体", "Condensed DNA, visible during division", "DNA 浓缩形态"],
            ["Diploid (2n) 二倍体", "Two sets of chromosomes — humans 2n = 46", "体细胞"],
            ["Haploid (n) 单倍体", "One set — humans n = 23, gametes only", "配子"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "The cell cycle is the ordered sequence of stages a cell passes through as it grows and divides. Interphase (G1, S, G2) is when the cell grows and replicates DNA; the M phase is when it actually divides. The cell may also exit into G0, a resting or specialised state.",
        },
      ],
    },
    {
      id: "u1-sav",
      title: "Why Cells Stay Small — SA:V Ratio",
      zh: "细胞为什么小 — 表面积/体积比",
      big: "Cells must exchange materials (O₂, nutrients, waste) through the membrane. As a cell grows, volume rises faster than surface area, so SA:V falls — big cells can't exchange fast enough. Division resets the ratio.",
      bigZh: "细胞通过细胞膜交换物质;细胞越大,体积增长快于表面积,SA:V 下降,效率变低。分裂可恢复合适比值。",
      blocks: [
        {
          type: "compare",
          head: ["Radius (mm)", "SA = 4πr²", "V = 4/3 πr³", "SA:V ratio"],
          rows: [
            ["1", "≈ 12.57", "≈ 4.19", "≈ 3.0"],
            ["2", "≈ 50.27", "≈ 33.51", "≈ 1.5"],
            ["3", "≈ 113.1", "≈ 113.1", "≈ 1.0"],
          ],
        },
        {
          type: "tip",
          text: "Rule of thumb: <b>bigger radius → smaller SA:V → less efficient cell</b>. That's why most cells stay microscopic, and large organisms have <i>many</i> small cells rather than fewer giant ones.",
        },
        {
          type: "answer",
          label: "Exam sentence",
          text: "As a cell's radius increases, its volume grows faster than its surface area, so the SA:V ratio decreases. A low SA:V ratio means materials cannot diffuse in and out fast enough, so the cell must divide to maintain efficient exchange.",
        },
      ],
    },
    {
      id: "u1-mitosis",
      title: "Mitosis 有丝分裂 (5 stages)",
      zh: "第二章 · Mitosis stages",
      big: "Mitosis produces 2 genetically identical diploid daughter cells for body growth, repair, and renewal. Memory: P · Pro · M · A · T.",
      bigZh: "有丝分裂产生 2 个完全相同的二倍体子细胞,用于体细胞生长、修复、更新。",
      blocks: [
        {
          type: "ladder",
          items: [
            ["Prophase 前期", "Chromatin condenses into chromosomes; spindle forms; nucleolus disappears", "1"],
            ["Prometaphase 前中期", "Nuclear envelope breaks down; chromosomes attach to spindle fibers", "2"],
            ["Metaphase 中期", "Chromosomes line up on the equator — BEST stage to see them", "3"],
            ["Anaphase 后期", "Sister chromatids separate and move to opposite poles", "4"],
            ["Telophase 末期", "Chromatids decondense; nuclear envelope reforms; spindle disappears", "5"],
          ],
        },
        {
          type: "rules",
          items: [
            ["Cytokinesis 细胞质分裂", "After mitosis: cytoplasm splits → two separate cells", "完成分裂"],
            ["Chromatin vs Chromosome", "Same DNA, different forms — loose during interphase, condensed during division", "形态差异"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Mitosis is the division of the nucleus into two genetically identical diploid daughter nuclei. It proceeds through prophase, prometaphase, metaphase, anaphase, and telophase, followed by cytokinesis which divides the cytoplasm. Mitosis is used in somatic (body) cells for growth, repair, and tissue renewal.",
        },
      ],
    },
    {
      id: "u1-checkpoints",
      title: "Checkpoints, Cancer & Apoptosis",
      zh: "第三章 · 调控、癌症与凋亡",
      big: "Three checkpoints make sure the cell is ready before it moves on. When regulation fails, cancer can develop. Apoptosis is programmed cell death — the body's way of removing damaged cells.",
      bigZh: "三个检查点确保细胞准备好才推进。调控失败导致癌症。凋亡是程序性细胞死亡,清除受损细胞。",
      blocks: [
        {
          type: "compare",
          head: ["Checkpoint 检查点", "Where", "Checks", "If failed"],
          rows: [
            ["G1 growth checkpoint", "End of G1", "Cell big enough? Enough proteins?", "→ enters G0 (resting)"],
            ["DNA synthesis checkpoint", "During S", "Was DNA copied correctly?", "→ repair or halt"],
            ["Mitosis checkpoint", "Mid-M", "Chromosomes attached to spindle?", "→ delay division"],
          ],
        },
        {
          type: "compare",
          head: ["Regulator type", "Protein", "Gene source", "Function"],
          rows: [
            ["Stimulating 促进型", "CDK-cyclins", "Proto-oncogenes 原癌基因", "Push the cell cycle forward"],
            ["Inhibitory 抑制型", "p53 (TP53), Rb", "Tumor-suppressor genes 抑癌基因", "Stop cycle when DNA damaged"],
          ],
        },
        {
          type: "tip",
          text: "<b>Cancer pathway:</b> CDK-cyclins overactive → uncontrolled division. p53/Rb lose function → cell can't stop. Cancer stages: 0 (in situ) → I (local) → II (spreading) → III (advanced local) → IV (metastasis 转移).",
        },
        {
          type: "answer",
          label: "Apoptosis 凋亡",
          text: "Apoptosis is programmed cell death — an orderly self-destruction that removes damaged or unnecessary cells. Normal cells with DNA damage undergo apoptosis; cancer cells escape it. Cancer treatments (surgery, radiation, chemotherapy) work in part by inducing apoptosis in tumour cells.",
        },
      ],
    },
    {
      id: "u1-meiosis",
      title: "Meiosis 减数分裂",
      zh: "第四章 · Meiosis I & II",
      big: "Meiosis makes gametes (sperm & eggs). One diploid cell → two divisions → four haploid daughter cells, each genetically different.",
      bigZh: "减数分裂产生配子。一个二倍体细胞经两次分裂 → 四个单倍体子细胞,每个都不同。",
      blocks: [
        {
          type: "compare",
          head: ["", "Meiosis I 减数分裂I", "Meiosis II 减数分裂II"],
          rows: [
            ["What separates 分离对象", "Homologous chromosomes 同源染色体", "Sister chromatids 姐妹染色单体"],
            ["Key feature 关键特征", "Crossing over in Prophase I (前期I交叉互换)", "Similar to mitosis but NO DNA copy"],
            ["Result 结果", "2 haploid cells", "4 haploid daughter cells"],
          ],
        },
        {
          type: "rules",
          items: [
            ["Crossing over 交叉互换", "Non-sister chromatids of homologous pairs swap segments — happens in Prophase I", "增加遗传多样性"],
            ["Linked genes 连锁基因", "Genes on the same chromosome — the closer they are, the harder to separate", "靠得越近越难分离"],
            ["Recombination 重组", "New allele combinations produced by crossing over", "新组合"],
          ],
        },
        {
          type: "answer",
          label: "Why meiosis creates variation",
          text: "Meiosis produces genetic variation through two mechanisms: (1) crossing over in Prophase I swaps segments between homologous chromosomes, and (2) independent assortment in Metaphase I randomly orients each homologous pair. Together they create huge numbers of possible allele combinations in the gametes.",
        },
      ],
    },
    {
      id: "u1-mito-vs-meio",
      title: "Mitosis vs Meiosis 关键对比",
      zh: "两种分裂的核心区别",
      big: "Same machinery, very different outcomes. Memorise this table — it's tested every time.",
      bigZh: "同样的机制,完全不同的结果。这张表必背。",
      blocks: [
        {
          type: "compare",
          head: ["Feature 项目", "Mitosis 有丝分裂", "Meiosis 减数分裂"],
          wide: true,
          rows: [
            ["Cells produced 产生细胞数", "2", "4"],
            ["Ploidy 倍性", "Diploid (2n)", "Haploid (n)"],
            ["Genetic identity 遗传一致性", "Identical to parent", "Different from parent"],
            ["Where 发生位置", "Somatic cells 体细胞", "Gonads / sex cells 性腺"],
            ["Divisions 分裂次数", "1", "2"],
            ["Variation 遗传变异", "None", "Crossing over + independent assortment"],
          ],
        },
        {
          type: "tip",
          text: "Quick check: if a question mentions <b>sperm, eggs, gametes, haploid, or genetic diversity</b> → meiosis. If it mentions <b>growth, repair, skin cells, or identical copies</b> → mitosis.",
        },
      ],
    },
    {
      id: "u1-mendel",
      title: "Mendelian Genetics 孟德尔遗传学",
      zh: "第五章 · Mendel's Laws",
      big: "Mendel's two laws explain how alleles pass from parents to offspring. Punnett squares predict ratios.",
      bigZh: "孟德尔两大定律解释等位基因如何遗传。庞纳特方格用于预测比例。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Gene 基因", "Section of DNA that codes for one trait", ""],
            ["Allele 等位基因", "Different versions of the same gene (e.g. B and b)", ""],
            ["Genotype 基因型", "Genetic makeup (BB, Bb, bb)", "用字母写"],
            ["Phenotype 表现型", "Observable trait (purple flower, tall stem)", "肉眼可见"],
            ["Homozygous 纯合子", "Two identical alleles (BB or bb)", ""],
            ["Heterozygous 杂合子", "Two different alleles (Bb)", ""],
            ["Dominant 显性", "Allele expressed in heterozygote — UPPERCASE (B)", ""],
            ["Recessive 隐性", "Only shows when homozygous — lowercase (b)", ""],
          ],
        },
        {
          type: "compare",
          head: ["Mendel's Law 孟德尔定律", "What it says", "Where it happens"],
          rows: [
            ["① Segregation 分离定律", "Allele pairs separate when gametes form; each gamete gets ONE allele", "Anaphase I of meiosis"],
            ["② Independent Assortment 自由组合", "Different gene pairs distribute INDEPENDENTLY of each other", "Metaphase I of meiosis"],
          ],
        },
        {
          type: "answer",
          label: "Key ratios 必背比例",
          text: "Monohybrid cross Bb × Bb → Genotype 1:2:1 (BB:Bb:bb) | Phenotype 3:1 (dominant:recessive). Dihybrid cross AaBb × AaBb → F2 phenotype ratio 9:3:3:1.",
        },
        {
          type: "tip",
          text: "<b>Testcross 测交:</b> cross unknown with recessive homozygote (aa). If all offspring show dominant → unknown is AA. If 1:1 dominant:recessive → unknown is Aa.",
        },
      ],
    },
    {
      id: "u1-complex",
      title: "Complex Inheritance 复杂遗传",
      zh: "第六章 · 显性类型与变化",
      big: "Real inheritance isn't always 'one dominates the other'. Four patterns of dominance, plus blood types, epistasis, and sex linkage.",
      bigZh: "现实遗传不只是\"一个压一个\"。四种显性类型 + 血型 + 上位性 + 性连锁。",
      blocks: [
        {
          type: "compare",
          head: ["Type 类型", "Description", "Example"],
          rows: [
            ["Complete dominance 完全显性", "One allele fully masks the other", "Bb = purple (BB × bb → all purple)"],
            ["Incomplete dominance 不完全显性", "Heterozygote shows INTERMEDIATE phenotype", "Red × white → pink (Rr = pink)"],
            ["Co-dominance 共显性", "Both alleles fully expressed together", "Roan cattle: red & white patches together"],
            ["Multiple alleles 多等位基因", "Three or more alleles for one gene", "ABO blood type (Iᴬ, Iᴮ, i)"],
          ],
        },
        {
          type: "compare",
          head: ["Blood type 血型", "Genotype 基因型", "Antigens 抗原", "Antibodies 抗体"],
          rows: [
            ["A", "IᴬIᴬ or Iᴬi", "A", "anti-B"],
            ["B", "IᴮIᴮ or Iᴮi", "B", "anti-A"],
            ["AB (universal recipient 万能受血者)", "IᴬIᴮ", "A + B", "none"],
            ["O (universal donor 万能供血者)", "ii", "none", "anti-A + anti-B"],
          ],
        },
        {
          type: "answer",
          label: "Epistasis 上位性",
          text: "Epistasis is when one gene MASKS the effect of another gene (different genes, not different alleles). Labrador coat colour: E_ gene controls whether any pigment is made; B_ controls dark vs light. E_B_ = black, E_bb = brown, ee__ = yellow (no pigment, regardless of B).",
        },
        {
          type: "answer",
          label: "Sex-linked traits 性连锁",
          text: "Sex-linked genes are on the X or Y chromosome — most are on X. Males (XY) have only ONE X, so they show X-linked recessive traits more easily than females (XX, who need two recessive alleles). Examples: red-green colour blindness, hemophilia. Dosage compensation: females randomly inactivate one X per cell — this gives calico cats their patchy coat.",
        },
        {
          type: "rules",
          items: [
            ["□", "Unaffected male 未患病男性", "Pedigree symbol"],
            ["○", "Unaffected female 未患病女性", ""],
            ["■", "Affected male 患病男性", ""],
            ["●", "Affected female 患病女性", ""],
            ["□—○", "Mating pair 配偶关系", "horizontal line"],
            ["|", "Offspring 子代", "vertical line"],
          ],
        },
      ],
    },
    {
      id: "u1-summary",
      title: "Unit Summary 单元总复习",
      zh: "考前必背公式与策略",
      big: "Quick-reference formulas, key distinctions, and exam strategies for Unit 1.",
      bigZh: "Unit 1 公式速查、关键区别、考试技巧。",
      blocks: [
        {
          type: "compare",
          head: ["Quantity 计算", "Formula", "Notes"],
          rows: [
            ["Sphere surface area", "SA = 4πr²", "r = radius"],
            ["Sphere volume", "V = 4/3 × π × r³", ""],
            ["SA:V ratio", "SA ÷ V", "Smaller ratio = less efficient cell"],
            ["Monohybrid F2 phenotype ratio", "3 : 1", "Aa × Aa"],
            ["Dihybrid F2 phenotype ratio", "9 : 3 : 3 : 1", "AaBb × AaBb"],
          ],
        },
        {
          type: "tip",
          text: "<b>5 exam strategies:</b> ① Punnett squares — write gametes on top & side first. ② Dihybrid: use FOIL to find gametes (AaBb → AB, Ab, aB, ab). ③ Blood types: A has anti-B; B has anti-A; O has both; AB has none. ④ Meiosis: crossing over in Prophase I; homologs separate in Anaphase I; sister chromatids separate in Anaphase II. ⑤ Pedigree: skipping generations usually = recessive; only-males-affected usually = X-linked.",
        },
        {
          type: "answer",
          label: "Big distinctions to remember",
          text: "Mitosis = 2 identical diploid cells (body). Meiosis = 4 different haploid cells (gametes). Genotype = letters (Gg); phenotype = visible trait (green). Incomplete dominance = blended intermediate; co-dominance = both fully shown together. Epistasis = one gene masks another (different genes, not alleles). X-linked = males more affected.",
        },
      ],
    },
  ],

  u2: [
    {
      id: "u2-mutation",
      title: "Mutations 突变",
      zh: "DNA 序列变化",
      big: "A mutation is a change in DNA base sequence. Since DNA codes for proteins, changes can alter codons → amino acids → protein shape → function.",
      bigZh: "突变 = DNA 序列发生变化。可能影响 codon、氨基酸、蛋白质形状和功能。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Inherited 遗传", "Passed from parents", "germ-line mutation"],
            ["Mutagens 诱变剂", "UV light, chemicals, X-rays cause changes", ""],
            ["Acquired 后天", "Random errors during DNA copying", ""],
          ],
        },
        {
          type: "compare",
          head: ["Type 类型", "What changes", "Effect 影响范围"],
          rows: [
            ["Gene mutation 基因突变", "A small piece of one gene", "Usually affects ONE gene"],
            ["Chromosomal mutation 染色体突变", "Whole chromosome or large section", "Can affect MANY genes"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "A mutation is a change in the DNA base sequence within a gene. It may be inherited from parents, caused by mutagens such as UV or chemicals, or acquired during DNA copying. Mutations can be neutral, harmful, or beneficial.",
        },
        {
          type: "tip",
          text: "<b>Significance:</b> mutations are the raw material of evolution. Example: sickle-cell trait is harmful normally, but in malaria regions it's BENEFICIAL for heterozygotes — environment decides.",
        },
      ],
    },
    {
      id: "u2-point",
      title: "Point Mutations: Silent · Missense · Nonsense",
      zh: "点突变三兄弟",
      big: "Substitution = one base swapped for another. The genetic code is redundant, so the result depends on which codon you land on.",
      bigZh: "替换 = 一个碱基换另一个。因密码子简并性,结果分三种。",
      blocks: [
        {
          type: "compare",
          head: ["Type 类型", "What happens", "Example"],
          rows: [
            ["Silent 沉默", "Base changes, but amino acid stays the same", "UAC → UAU (both = tyrosine)"],
            ["Missense 错义", "Base changes, amino acid changes", "UAC → CAC (tyrosine → histidine)"],
            ["Nonsense 无义", "Codon becomes a STOP codon → short protein", "UAC → UAA (stop too early)"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Silent mutation has no amino-acid change; missense changes one amino acid; nonsense changes a codon into a STOP codon, producing a shortened protein that is usually nonfunctional.",
        },
        {
          type: "tip",
          text: "Why early nonsense is worst: the ribosome stops far too soon → almost no protein made → likely nonfunctional.",
        },
      ],
    },
    {
      id: "u2-frameshift",
      title: "Frameshift Mutations 移码突变",
      zh: "Insertion / Deletion",
      big: "Ribosomes read mRNA 3 bases at a time. Inserting or deleting a non-multiple-of-3 number of bases shifts EVERY codon after it.",
      bigZh: "核糖体每 3 个碱基一组读。插入或删除非 3 倍数的碱基会让之后所有分组错位。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Insertion 插入", "Extra base(s) added", "Shifts frame if not multiple of 3"],
            ["Deletion 删除", "Base(s) removed", "Shifts frame if not multiple of 3"],
            ["3-base change", "Adds/removes ONE codon", "No frameshift — usually milder"],
          ],
        },
        {
          type: "answer",
          label: "Sentence analogy",
          text: "Think: 'THE FAT CAT ATE' — delete the F → 'THE ATC ATA TE...' — every word after the deletion is now garbled. That's why frameshift usually wrecks the protein.",
        },
      ],
    },
    {
      id: "u2-chrom",
      title: "Chromosomal Mutations 染色体结构突变",
      zh: "Deletion · Duplication · Inversion · Translocation",
      big: "Larger-scale changes — whole sections of a chromosome are lost, repeated, flipped, or moved to another chromosome.",
      bigZh: "大段染色体级别的变化:丢失、重复、翻转、易位。",
      blocks: [
        {
          type: "compare",
          head: ["Type", "ABCDEF becomes...", "中文"],
          rows: [
            ["Deletion", "ABCEF (one segment lost)", "缺失"],
            ["Duplication", "ABBCDEF (segment repeated)", "重复"],
            ["Inversion", "AEDCBF (segment flipped)", "倒位"],
            ["Translocation", "Piece swaps to another chromosome", "易位"],
          ],
        },
        {
          type: "tip",
          text: "Chromosomal mutations affect <b>many genes at once</b> — so they're often more severe than single-base point mutations (e.g. Down syndrome = trisomy 21).",
        },
      ],
    },
    {
      id: "u2-dna-evidence",
      title: "DNA is the Genetic Material",
      zh: "三个关键实验",
      big: "Three classic experiments established DNA as the genetic material — not protein.",
      bigZh: "三个经典实验证明 DNA(不是蛋白质)是遗传物质。",
      blocks: [
        {
          type: "compare",
          head: ["Scientist", "Discovery", "中文"],
          rows: [
            ["Griffith (1928)", "Transformation: heat-killed S strain + live R strain → R became deadly S", "转化现象"],
            ["Avery–MacLeod–McCarty (1944)", "Destroying DNA stopped transformation → DNA is the transforming factor", "DNA 是转化因子"],
            ["Hershey–Chase (1952)", "Phage experiment: only DNA (not protein) entered bacteria", "DNA 进入细胞"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Griffith discovered transformation in bacteria; Avery, MacLeod and McCarty showed DNA was the transforming factor by destroying each macromolecule in turn; Hershey and Chase confirmed using radioactive labels that DNA — not protein — enters bacteria during phage infection.",
        },
      ],
    },
    {
      id: "u2-dna-struct",
      title: "DNA Structure 结构",
      zh: "Nucleotides · base pairing · antiparallel",
      big: "DNA's nucleotide building block is sugar + phosphate + base. Strands pair by A-T, C-G and run in opposite directions (antiparallel).",
      bigZh: "核苷酸 = 糖+磷酸+碱基。两条链按 A-T、C-G 配对,方向相反。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Phosphate group", "Part of the sugar-phosphate backbone", "磷酸基"],
            ["Deoxyribose sugar", "5-carbon sugar (DNA only); RNA uses ribose", "脱氧核糖"],
            ["Nitrogenous base", "A, T, C, or G — carries the information", "碱基"],
            ["Backbone 骨架", "Sugar + phosphate, alternating", "结构骨架"],
          ],
        },
        {
          type: "compare",
          head: ["Group", "Bases", "Structure", "中文"],
          rows: [
            ["Purines", "Adenine (A), Guanine (G)", "Double-ring", "嘌呤 — 双环"],
            ["Pyrimidines", "Cytosine (C), Thymine (T)", "Single-ring", "嘧啶 — 单环"],
          ],
        },
        {
          type: "answer",
          label: "Base pairing",
          text: "In DNA, adenine pairs with thymine (A-T, 2 hydrogen bonds), and cytosine pairs with guanine (C-G, 3 hydrogen bonds). Strands are antiparallel — one runs 5' to 3', the other 3' to 5'. This complementary pairing is the basis for replication and transcription.",
        },
        {
          type: "tip",
          text: "Quick practice: complementary strand of <b>ATCTGAG</b> is <b>TAGACTC</b>. Same direction reversed = read off A→T, T→A, C→G, G→C.",
        },
      ],
    },
    {
      id: "u2-replication",
      title: "DNA Replication 复制",
      zh: "Semi-conservative + enzymes",
      big: "Before cell division, DNA must duplicate so each daughter cell gets a full set. Replication is semi-conservative: each new molecule keeps one old strand.",
      bigZh: "细胞分裂前 DNA 必须复制。半保留:每个新分子保留一条旧链。",
      blocks: [
        {
          type: "compare",
          head: ["Enzyme 酶", "Function 功能"],
          rows: [
            ["Helicase 解旋酶", "Unwinds DNA by breaking hydrogen bonds between bases"],
            ["Primase 引物酶", "Lays down an RNA primer to start synthesis"],
            ["DNA polymerase 聚合酶", "Adds new nucleotides (5' → 3') and forms phosphodiester bonds"],
            ["DNA ligase 连接酶", "Joins Okazaki fragments on the lagging strand"],
          ],
        },
        {
          type: "compare",
          head: ["Strand", "Synthesis", "中文"],
          rows: [
            ["Leading strand", "Continuous, follows the replication fork", "前导链 — 连续"],
            ["Lagging strand", "Discontinuous — synthesised as Okazaki fragments", "滞后链 — 不连续片段"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "DNA replication is semi-conservative: each new molecule contains one original strand and one newly synthesised strand. Helicase unwinds the double helix, primase adds RNA primers, DNA polymerase builds new strands in the 5' to 3' direction, and ligase joins the Okazaki fragments on the lagging strand.",
        },
      ],
    },
    {
      id: "u2-central",
      title: "Central Dogma 中心法则",
      zh: "DNA → RNA → Protein",
      big: "Genetic information flows: DNA stores it → mRNA carries it out → protein executes function.",
      bigZh: "信息流动:DNA 存→ mRNA 转→ protein 执行。",
      blocks: [
        {
          type: "ladder",
          items: [
            ["DNA", "Stores genetic information in the nucleus", "1"],
            ["mRNA", "Carries the message from nucleus to ribosome", "2"],
            ["Protein", "Performs the function (enzyme, structure, signal)", "3"],
          ],
        },
        {
          type: "answer",
          label: "Gene expression",
          text: "Gene expression is the use of a gene to synthesise a functional RNA or protein product. The two main stages are transcription (DNA → mRNA) and translation (mRNA → protein).",
        },
        {
          type: "tip",
          text: "Cake analogy: <b>gene = recipe</b>, <b>mRNA = photocopy you bring to the kitchen</b>, <b>protein = the finished cake</b>. The original recipe never leaves the cookbook (nucleus).",
        },
      ],
    },
    {
      id: "u2-transcription",
      title: "Transcription 转录",
      zh: "DNA template → mRNA",
      big: "RNA polymerase binds the promoter and reads the DNA template strand, building an mRNA strand by complementary base pairing.",
      bigZh: "RNA 聚合酶绑定启动子,用 DNA 模板互补配对合成 mRNA。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Promoter", "Where RNA polymerase first binds the DNA", "启动子"],
            ["RNA polymerase", "Builds the mRNA strand", "RNA 聚合酶"],
            ["Template strand", "DNA strand that is copied", "模板链"],
            ["mRNA", "Single-stranded copy, uses U instead of T", "信使 RNA"],
          ],
        },
        {
          type: "compare",
          head: ["Feature", "DNA", "RNA"],
          rows: [
            ["Sugar", "Deoxyribose", "Ribose"],
            ["Strands", "Usually double", "Usually single"],
            ["Bases", "A, T, C, G", "A, U, C, G (U replaces T)"],
          ],
        },
        {
          type: "answer",
          label: "Practice",
          text: "DNA template TAC GGC → mRNA AUG CCG. (Note: A pairs with U in RNA; the start codon AUG appears!)",
        },
      ],
    },
    {
      id: "u2-translation",
      title: "Translation 翻译",
      zh: "mRNA → Protein",
      big: "Ribosomes read mRNA codons (3 bases at a time). tRNAs deliver matching amino acids, which join via peptide bonds.",
      bigZh: "核糖体每 3 个碱基读一个 codon,tRNA 送来对应氨基酸,通过肽键连成多肽。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Codon 密码子", "3-base mRNA sequence coding for one amino acid", "AUG = start; UAA/UAG/UGA = stop"],
            ["tRNA", "Transfers amino acids; has an anticodon end + amino acid end", "运输 RNA"],
            ["Anticodon 反密码子", "tRNA's 3 bases — complementary to mRNA codon", "mRNA AUG ↔ tRNA UAC"],
            ["Peptide bond 肽键", "Links amino acids together", "连接氨基酸"],
          ],
        },
        {
          type: "compare",
          head: ["Ribosome site", "What happens", "中文"],
          rows: [
            ["A site (Aminoacyl)", "Receives the new incoming tRNA", "接收新 tRNA"],
            ["P site (Peptidyl)", "Holds the growing peptide chain", "保持肽链"],
            ["E site (Exit)", "Empty tRNA exits here", "tRNA 出口"],
          ],
        },
        {
          type: "compare",
          head: ["Stage", "What happens", "中文"],
          rows: [
            ["Initiation 起始", "mRNA binds ribosome; AUG start codon pairs with initiator tRNA (UAC)", "起始装配"],
            ["Elongation 延长", "tRNAs cycle through A → P → E; peptide chain grows", "延长肽链"],
            ["Termination 终止", "Stop codon (UAA/UAG/UGA) reached → polypeptide released", "释放多肽"],
          ],
        },
        {
          type: "tip",
          text: "Quick math: a 360-base mRNA codes for 360 ÷ 3 = <b>120 codons</b> (so up to 120 amino acids, minus the stop).",
        },
      ],
    },
    {
      id: "u2-regulation",
      title: "Gene Expression Regulation 基因调控",
      zh: "Transcription factors",
      big: "Not every cell expresses every gene. Transcription factors decide which genes turn on or off.",
      bigZh: "不是所有细胞都表达所有基因。转录因子控制开关。",
      blocks: [
        {
          type: "compare",
          head: ["Factor", "Effect", "中文"],
          rows: [
            ["Positive transcription factor", "Increases / activates transcription", "正向因子 — 促进转录"],
            ["Negative transcription factor", "Decreases / blocks transcription", "负向因子 — 阻止转录"],
          ],
        },
        {
          type: "answer",
          label: "Why it matters",
          text: "All your cells have the same DNA, but a neuron and a liver cell look totally different because they EXPRESS different genes. Transcription factors are the switches that decide which genes are on in which cells.",
        },
      ],
    },
    {
      id: "u2-hgp",
      title: "Human Genome Project",
      zh: "人类基因组计划",
      big: "An international effort to map and sequence the entire human genome — finished in 2003. It enabled modern personalised medicine.",
      bigZh: "国际合作绘制人类全基因组(2003 年完成),开启了现代精准医学。",
      blocks: [
        {
          type: "rules",
          items: [
            ["DNA fingerprinting", "Identifying individuals from DNA", "刑侦、亲缘鉴定"],
            ["Pharmacogenomics", "How a person's genes affect drug response", "个体化药物"],
            ["Gene therapy", "Treating disease by fixing or replacing genes", "基因治疗"],
            ["Personalised medicine", "Using genetic info for prevention, diagnosis, treatment", "个体化医疗"],
            ["Cancer research", "Identifying mutations driving tumours", "癌症研究"],
          ],
        },
        {
          type: "tip",
          text: "<b>Ethics matters:</b> genome data affects privacy, fairness in insurance/employment, and consent. That's why HGP discussions always include the ELSI (Ethical, Legal, Social Implications) angle.",
        },
      ],
    },
    {
      id: "u2-transgenic",
      title: "Transgenic Organisms 转基因生物",
      zh: "GM organisms 创建与利弊",
      big: "A transgenic organism has a foreign gene deliberately inserted into its genome, giving it a new trait.",
      bigZh: "转基因生物 = 把外源基因主动插入基因组,获得新特征。",
      blocks: [
        {
          type: "ladder",
          items: [
            ["1. Gene identification", "Find the gene of interest (target trait)", "1"],
            ["2. Gene insertion", "Use a vector (often a plasmid) or CRISPR-Cas9 to insert the gene", "2"],
            ["3. Selection / testing", "Check that the gene inserted correctly AND works", "3"],
          ],
        },
        {
          type: "compare",
          head: ["Examples 例子", "Trait added", "中文"],
          rows: [
            ["Golden Rice", "Vitamin A precursor production", "黄金大米 — 维生素A"],
            ["GloFish", "Fluorescent protein", "荧光鱼"],
            ["Bt crops", "Insect resistance", "抗虫作物"],
            ["Insulin-producing bacteria", "Make human insulin for diabetics", "胰岛素生产菌"],
          ],
        },
        {
          type: "compare",
          head: ["Benefits 利", "Concerns 弊"],
          rows: [
            ["Higher crop yields", "Possible biodiversity loss"],
            ["Medical products (insulin, vaccines)", "Animal welfare questions"],
            ["Less pesticide / water use", "Genetic privacy, gene patents"],
            ["Disease-resistant crops", "Ecological spread of new genes"],
          ],
        },
        {
          type: "answer",
          label: "Methods used in genetic engineering",
          text: "Common techniques include gene cloning, recombinant DNA technology (using plasmids as vectors), and CRISPR-Cas9 (a precise gene-editing system). Plasmids are useful because they can carry foreign DNA into cells and replicate independently.",
        },
      ],
    },
  ],

  u3: [
    {
      id: "u3-origins",
      title: "Seven Theories of Life's Origin",
      zh: "生命起源七种假说",
      big: "All seven ideas address one deep question: how did non-living chemicals form replicating, metabolising, evolving systems?",
      bigZh: "七种假说都在探讨同一个问题:非生命化学物质如何形成可复制、可代谢、可进化的系统?",
      blocks: [
        {
          type: "rules",
          items: [
            ["1. Electric spark 电火花", "Lightning provided energy to form organic molecules", "Miller-Urey style"],
            ["2. Clay 黏土假说", "Mineral surfaces concentrated molecules + acted as scaffolds", ""],
            ["3. Deep-sea vents 深海热液口", "Hot mineral-rich water powered early reactions", "海底热泉"],
            ["4. Chilly start 寒冷起源", "Ice protected fragile early molecules", ""],
            ["5. RNA world RNA 世界", "RNA was the first molecule — stored info AND catalysed reactions", "★重要"],
            ["6. Simple beginnings 简单起源", "Life started from very simple chemistry, then complexified", ""],
            ["7. Panspermia 泛种论", "Life (or precursors) came to Earth from space", "外太空起源"],
          ],
        },
        {
          type: "answer",
          label: "RNA world — why it's the favourite",
          text: "DNA is stable but needs enzymes (proteins) to be copied; proteins can catalyse but can't directly store inheritable information. RNA can do BOTH — it can store information like DNA, AND some RNAs (ribozymes) can catalyse reactions like proteins. So RNA likely came before DNA and proteins.",
        },
      ],
    },
    {
      id: "u3-endo",
      title: "Endosymbiotic Theory 内共生理论",
      zh: "Mitochondria & chloroplasts came from bacteria",
      big: "A large cell engulfed a small bacterium that wasn't digested. Over time the bacterium provided energy or photosynthesis — and became today's mitochondria / chloroplasts.",
      bigZh: "大细胞吞下小细菌没消化,反而获得能量或光合作用 → 演化成线粒体/叶绿体。",
      blocks: [
        {
          type: "compare",
          head: ["Organelle 细胞器", "Ancestor", "Function 功能"],
          rows: [
            ["Mitochondrion 线粒体", "Aerobic proteobacterium", "Cellular respiration / ATP"],
            ["Chloroplast 叶绿体", "Cyanobacterium 蓝细菌", "Photosynthesis"],
          ],
        },
        {
          type: "rules",
          items: [
            ["Double membrane", "Suggests engulfment — outer = host, inner = original bacterial", "双膜"],
            ["Own DNA", "Mitochondria & chloroplasts have circular DNA like bacteria", "自有 DNA"],
            ["Bacterial-like ribosomes", "70S ribosomes (bacterial), not 80S (eukaryotic)", "类细菌核糖体"],
            ["Binary fission", "These organelles divide independently of the cell", "独立分裂"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Endosymbiotic theory states that mitochondria and chloroplasts originated from free-living prokaryotes that were engulfed by a larger host cell. Evidence includes double membranes, separate circular DNA, bacterial-type ribosomes, and the ability to divide by binary fission.",
        },
      ],
    },
    {
      id: "u3-lamarck",
      title: "Lamarck vs Darwin",
      zh: "两种进化理论",
      big: "Lamarck proposed inheritance of acquired traits (rejected). Darwin proposed natural selection on heritable variation (accepted, with modern DNA evidence).",
      bigZh: "拉马克:后天获得性遗传(被否定)。达尔文:自然选择作用于可遗传变异(接受)。",
      blocks: [
        {
          type: "compare",
          head: ["", "Lamarck 拉马克", "Darwin 达尔文"],
          rows: [
            ["Mechanism", "Use & disuse + inheritance of acquired traits", "Natural selection on existing heritable variation"],
            ["Direction", "Organisms strive to improve", "Random variation; environment selects"],
            ["Status", "Rejected — acquired traits not heritable", "Accepted, supported by DNA"],
          ],
        },
        {
          type: "answer",
          label: "Giraffe-neck example",
          text: "Lamarck would say: each giraffe stretches its neck during its life, and passes longer necks to offspring. Darwin would say: giraffes naturally vary in neck length; those with longer necks reach more food, survive better, reproduce more — so long-neck alleles become more common over generations.",
        },
      ],
    },
    {
      id: "u3-selection",
      title: "Natural Selection 自然选择",
      zh: "Darwin's mechanism",
      big: "Populations contain heritable variation. The environment 'selects' which variations survive and reproduce. Over generations, helpful traits become more common.",
      bigZh: "种群本来就有可遗传变异。环境决定哪些变异更易生存繁殖。世代积累 → 有利特征增多。",
      blocks: [
        {
          type: "ladder",
          items: [
            ["Overproduction 多产", "Organisms make more offspring than can survive", "1"],
            ["Variation 变异", "Individuals differ — and some variation is heritable", "2"],
            ["Competition 竞争", "Limited resources → not all survive", "3"],
            ["Differential survival 差异生存", "Favourable traits → higher survival & reproduction", "4"],
            ["Trait increases 频率上升", "Favoured traits become more common each generation", "5"],
          ],
        },
        {
          type: "rules",
          items: [
            ["Fitness 适应度", "Ability to survive AND produce offspring", "Not 'strength' — REPRODUCTION matters"],
            ["Individual ≠ evolves", "Populations evolve over generations, not individuals", "重要区分"],
            ["Heritable variation required", "Selection can't act on non-heritable differences", ""],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Natural selection occurs when heritable variation affects survival and reproductive success in a given environment. The conditions are: overproduction of offspring, heritable variation among individuals, limited resources causing competition, and differential reproduction of better-adapted individuals.",
        },
      ],
    },
    {
      id: "u3-evidence",
      title: "Evidence for Evolution 进化证据",
      zh: "5 lines of evidence",
      big: "Multiple lines of evidence — like puzzle pieces — together establish evolution.",
      bigZh: "多种证据像拼图,共同证明进化。",
      blocks: [
        {
          type: "compare",
          head: ["Evidence type 证据类型", "What it shows", "Example"],
          rows: [
            ["Fossil 化石", "Timeline of life; species changing over time", "Whale ancestors with legs"],
            ["Biogeographical 生物地理", "Geographic distribution patterns", "Marsupials in Australia"],
            ["Anatomical 解剖", "Similar body structures (homologous)", "Human, bat, whale forelimb bones"],
            ["Embryological 胚胎", "Similar early development across species", "Vertebrate embryos with gill slits"],
            ["Molecular/Biochemical 分子", "Similar DNA & protein sequences", "Human-chimp DNA ~98% similar"],
          ],
        },
        {
          type: "tip",
          text: "Quick match: <b>DNA similarity → molecular</b>; <b>same forelimb bones → anatomical</b>; <b>fossils → fossil</b>; <b>marsupials only in Australia → biogeographical</b>.",
        },
      ],
    },
    {
      id: "u3-adaptations",
      title: "Adaptations 适应",
      zh: "Structural · Behavioural · Coadaptation",
      big: "Adaptations are heritable traits that improve survival or reproduction in a particular environment. They can be structural OR behavioural.",
      bigZh: "适应 = 可遗传的、提高生存/繁殖能力的特征。可以是结构上的,也可以是行为上的。",
      blocks: [
        {
          type: "compare",
          head: ["Type 类型", "Description", "Example"],
          rows: [
            ["Structural 结构", "Physical body features", "Opposable thumb, bipedalism, thick succulent leaves"],
            ["Behavioural 行为", "Actions / behaviours", "Migration of gray whales, hibernation"],
            ["Coadaptation 协同适应", "Two species adapt in relation to each other", "Flowers and hummingbirds (shape/colour match)"],
            ["Mimicry 拟态", "One species resembles another for survival advantage", "King snake resembling coral snake"],
          ],
        },
        {
          type: "answer",
          label: "Peppered moth — classic natural-selection story",
          text: "Before industrial pollution, light-coloured peppered moths were more common because they were camouflaged on light tree bark. When pollution darkened tree bark, dark moths were better camouflaged, survived predators more often, and reproduced more. So dark moth frequency rose. The environment changed which colour had higher fitness.",
        },
        {
          type: "answer",
          label: "How it all connects",
          text: "Mutations create new genetic variation. Some variations improve fitness in a particular environment. Natural selection makes those favoured variations more common over generations, producing adaptations.",
        },
      ],
    },
  ],
  u4: [
    {
      id: "u4-intro",
      title: "Introduction to Classification",
      zh: "分类系统介绍",
      big: "Classification is the process of organizing organisms into groups based on shared characteristics. Taxonomy is the science that does this naming, describing, and grouping.",
      bigZh: "分类:按共同特征把生物归类。分类学(Taxonomy)是命名、描述、归类生物的科学。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Classification 分类", "Organising organisms into groups by shared characteristics", "process"],
            ["Taxonomy 分类学", "The science of naming, describing, and classifying organisms", "key concept"],
            ["Why it matters", "Helps scientists study relationships between organisms and understand biodiversity", ""],
          ],
        },
        {
          type: "tip",
          text: "Quick history: <b>Aristotle</b> (Ancient Greek) first categorised living things → <b>Carl Linnaeus</b> (1700s, Swedish) developed binomial nomenclature → <b>Darwin</b> (19th-20th c.) added evolution as the basis for classification.",
        },
        {
          type: "answer",
          label: "Importance of classification (5 uses)",
          text: "(1) Organise and catalogue Earth's biodiversity. (2) Facilitate communication among scientists. (3) Aid in understanding evolutionary relationships. (4) Help identify new species. (5) Support conservation efforts.",
        },
      ],
    },
    {
      id: "u4-levels",
      title: "Classification Levels",
      zh: "分类等级顺序",
      big: "Organisms are sorted into a nested hierarchy. As you move down the list, groups get smaller and members more similar.",
      bigZh: "越往下,组越小,成员越相似。",
      blocks: [
        {
          type: "ladder",
          items: [
            ["Domain", "域", "broadest"],
            ["Kingdom", "界", ""],
            ["Phylum", "门", ""],
            ["Class", "纲", ""],
            ["Order", "目", ""],
            ["Family", "科", ""],
            ["Genus", "属", ""],
            ["Species", "种", "most specific"],
          ],
        },
        {
          type: "tip",
          text: "Memory line: <b>D</b>ear <b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup.",
        },
        {
          type: "compare",
          head: ["Level", "Giant Panda 大熊猫 (Ailuropoda melanoleuca)"],
          rows: [
            ["Domain", "Eukarya"],
            ["Kingdom", "Animalia"],
            ["Phylum", "Chordata"],
            ["Class", "Mammalia"],
            ["Order", "Carnivora"],
            ["Family", "Ursidae"],
            ["Genus", "Ailuropoda"],
            ["Species", "melanoleuca"],
          ],
        },
        {
          type: "answer",
          label: "Exam sentence",
          text: "Domain is the broadest group, and species is the most specific group. Members in lower categories share more characteristics than members in higher categories.",
        },
      ],
    },
    {
      id: "u4-binomial",
      title: "Linnaeus & Binomial Nomenclature",
      zh: "林奈与双名法",
      big: "Carl Linnaeus (1707–1778), a Swedish botanist, created a two-part scientific naming system: Genus + species.",
      bigZh: "林奈(1707-1778,瑞典植物学家)创立两部分命名法:属名 + 种名。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Genus name", "Capitalised first letter", "属名首字母大写"],
            ["specific epithet", "Lower-case (the species part)", "种名小写"],
            ["Both words", "Italicised, or underlined when handwritten", "斜体,手写时下划线"],
            ["Standardised", "Used globally — same name everywhere", "全球统一标准"],
          ],
        },
        {
          type: "tip",
          text: "Examples: <i>Homo sapiens</i> (humans), <i>Ailuropoda melanoleuca</i> (giant panda), <i>Quercus albus</i> (white oak). In <i>Quercus albus</i>, the genus is <b>Quercus</b> — the first word is always the genus.",
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Binomial nomenclature is a two-part naming system developed by Carl Linnaeus. It uses the genus name (capitalised) and the specific epithet (lower-case), both italicised — e.g. Homo sapiens.",
        },
      ],
    },
    {
      id: "u4-domains",
      title: "Three Domains & Six Kingdoms",
      zh: "三域与六界",
      big: "All life splits into three domains. Below the domain level, life sorts into six kingdoms.",
      bigZh: "所有生命分三域;域之下分六界。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Bacteria 细菌域", "Prokaryotic, single-celled organisms", "原核单细胞"],
            ["Archaea 古菌域", "Prokaryotic; often found in extreme environments", "原核,常生活于极端环境"],
            ["Eukarya 真核域", "Includes ALL eukaryotic organisms — plants, animals, fungi, protists", "真核生物"],
          ],
        },
        {
          type: "compare",
          head: ["Kingdom", "Cell type", "Cell #", "Wall", "Nutrition", "Example"],
          wide: true,
          rows: [
            ["Bacteria",   "Prokaryotic", "Uni",        "Peptidoglycan",    "Auto/hetero", "E. coli"],
            ["Archaea",    "Prokaryotic", "Uni",        "No peptidoglycan", "Auto/hetero", "Methanogens"],
            ["Protista",   "Eukaryotic",  "Mostly uni", "Some",             "Auto/hetero", "Amoeba, algae"],
            ["Fungi",      "Eukaryotic",  "Mostly multi","Chitin",          "Hetero",      "Mushrooms, yeast"],
            ["Plantae",    "Eukaryotic",  "Multi",      "Cellulose",        "Autotrophic", "Moss, fern, flower"],
            ["Animalia",   "Eukaryotic",  "Multi",      "Absent",           "Heterotrophic","Human, fish, insect"],
          ],
        },
        {
          type: "tip",
          text: "MCQ shortcuts: peptidoglycan = Bacteria · prokaryotic = Bacteria + Archaea · multicellular + heterotrophic = Animals & Fungi · cellulose + autotroph = Plants · chitin + heterotroph = Fungi.",
        },
        {
          type: "tip",
          text: "Note: Some classification systems combine Bacteria and Archaea into one kingdom called Monera; modern systems separate them based on molecular evidence.",
        },
      ],
    },
    {
      id: "u4-cladistics",
      title: "Cladistics & Cladograms",
      zh: "分支系统学与分支图",
      big: "Cladistics is the modern approach to classification, based on common ancestry and shared characteristics. It uses cladograms to show evolutionary relationships.",
      bigZh: "分支系统学是现代分类方法,基于共同祖先和共同特征,用分支图展示进化关系。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Common ancestry","Classification is based on shared evolutionary origin","共同祖先"],
            ["Monophyletic group / clade","A common ancestor + ALL of its descendants","单系群:祖先 + 所有后代"],
            ["Node","A common ancestor in the tree","节点 = 共同祖先"],
            ["Derived character","A new trait shared by descendants (e.g. jaws, lungs, fur)","衍生特征"],
            ["Tips","Represent the current species or groups","末端 = 现存物种"],
          ],
        },
        {
          type: "answer",
          label: "Written template",
          text: "Cladograms show evolutionary relationships using branches for groups and nodes for common ancestors. Species sharing a more recent common ancestor are more closely related. Shared derived characteristics show how species connect through evolution.",
        },
        {
          type: "tip",
          text: "Standard derived characters used in class: <b>jaws → lungs → claws/nails → fur+mammary glands</b>. Order from common ancestor outward: <i>hagfish → perch → salamander → lizard → pigeon → mouse → chimp</i>.",
        },
      ],
    },
    {
      id: "u4-phylogenetic",
      title: "Phylogenetic Trees",
      zh: "系统发生树",
      big: "Phylogenetic trees are visual representations of evolutionary relationships — showing divergence from common ancestors.",
      bigZh: "系统发生树是进化关系的图示,展示物种从共同祖先分化(divergence)。",
      blocks: [
        {
          type: "rules",
          items: [
            ["What they show","Evolutionary relationships among species","进化关系"],
            ["Branches","Show divergence from common ancestors","分支表示从共同祖先分化"],
            ["Nodes","Represent common ancestors","节点 = 共同祖先"],
            ["Tips","Represent current species or groups","末端 = 现存物种或群体"],
            ["Style","Always shows DIVERGENT evolution","展示的是分化进化"],
          ],
        },
        {
          type: "tip",
          text: "Both (a) angled-branch and (b) rectangular-branch trees show the same relationships — the visual style differs but the branching order and the common ancestors are identical.",
        },
      ],
    },
    {
      id: "u4-molecular",
      title: "Molecular Systematics",
      zh: "分子系统学",
      big: "Uses DNA, RNA, and protein sequences to determine evolutionary relationships — more accurate than physical traits alone.",
      bigZh: "用 DNA、RNA、蛋白质序列判断进化关系,比看外形更准确。",
      blocks: [
        {
          type: "rules",
          items: [
            ["DNA hybridization","Two DNA strands from different species are paired — more matching = closer relationship","DNA 杂交"],
            ["PCR (Polymerase Chain Reaction)","Amplifies tiny DNA samples for comparison","聚合酶链式反应"],
            ["DNA sequencing","Reads the exact base order of DNA","DNA 测序"],
          ],
        },
        {
          type: "answer",
          label: "Molecular clock",
          text: "A molecular clock estimates how long ago species shared a common ancestor by comparing DNA or protein sequence differences. More similar = more recent split. More differences = longer ago they diverged.",
        },
        {
          type: "answer",
          label: "Linnaeus vs Modern Taxonomy",
          text: "Both systems organise organisms into hierarchical groups. However, Linnaeus classified mainly by physical similarities, while modern classification uses DNA evidence, genetic similarities, and evolutionary relationships — giving more accurate placement.",
        },
      ],
    },
    {
      id: "u4-keys",
      title: "Taxonomic Keys",
      zh: "分类检索表",
      big: "Tools used to identify unknown organisms. A dichotomous key uses a series of paired (two-choice) statements until the organism is identified.",
      bigZh: "用于识别未知生物的工具。二歧检索表(dichotomous key)用一系列\"二选一\"的问题。",
      blocks: [
        {
          type: "answer",
          label: "Example dichotomous key",
          text: "1a. Organism has fur or hair → Go to 2.  |  1b. Organism does not have fur or hair → Go to 3.  ||  2a. Organism lays eggs → Monotreme  |  2b. Organism gives birth to live young → Mammal",
        },
        {
          type: "tip",
          text: "Building a key: list characteristics → order general to specific → divide specimens at each step → keep dividing until each organism is reached → test the key.",
        },
        {
          type: "answer",
          label: "Exam template",
          text: "A dichotomous key identifies species through a series of paired statements with two contrasting choices at each step. The user follows the choice matching the organism's characteristics until the organism is identified.",
        },
      ],
    },
    {
      id: "u4-evolution-types",
      title: "Adaptive · Divergent · Convergent Evolution",
      zh: "适应辐射、分化进化、趋同进化",
      big: "Three patterns of evolution — know how species diverge or converge over time.",
      bigZh: "进化的三种模式 — 物种如何分化或趋同。",
      blocks: [
        {
          type: "compare",
          head: ["Pattern", "What happens", "Example"],
          rows: [
            ["Adaptive radiation 适应辐射", "ONE ancestor → many species filling different niches, quickly", "Darwin's finches on Galápagos"],
            ["Divergent evolution 分化进化", "Related species become MORE different over time", "Different dog breeds; bear species"],
            ["Convergent evolution 趋同进化", "Unrelated species develop SIMILAR traits independently (similar environment/niche)", "Wings of bats, birds, insects, butterflies"],
          ],
        },
        {
          type: "tip",
          text: "Adaptive radiation is a special, rapid form of divergent evolution. Convergent evolution does NOT mean species are related — just that similar pressures produced similar solutions.",
        },
        {
          type: "answer",
          label: "How to tell them apart",
          text: "Divergent: same ancestor, growing apart. Convergent: different ancestors, looking alike. Adaptive radiation: one ancestor exploding into many forms quickly to fill empty niches.",
        },
      ],
    },
    {
      id: "u4-biodiversity",
      title: "Biodiversity",
      zh: "生物多样性",
      big: "The variety of life in an area: genetic, species, and ecosystem diversity.",
      bigZh: "某地区生命的多样性:遗传、物种、生态系统。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Genetic 遗传", "Variety of genes within a species", "Different dog breeds"],
            ["Species 物种", "Variety & number of species in an area", "Rainforest birds, insects, plants"],
            ["Ecosystem 生态系统", "Variety of ecosystems in an area", "Forest, desert, wetland, ocean"],
          ],
        },
        {
          type: "compare",
          head: ["Threat 威胁", "Example", "Conservation 保护"],
          rows: [
            ["Habitat destruction", "Deforestation, urban dev.", "Protected areas, restoration"],
            ["Pollution", "Plastic, chemicals", "Reduce waste, clean habitats"],
            ["Climate change", "Rising temp, habitat shift", "Cut greenhouse gases"],
            ["Invasive species", "Non-native outcompete native", "Monitor, remove, control"],
            ["Overhunting/fishing", "Population drops", "Hunting laws, fishing limits"],
          ],
        },
        {
          type: "answer",
          label: "Why it matters",
          text: "Conserving biodiversity maintains ecosystem stability, provides food and medicine, supports oxygen production and nutrient cycling, and protects species from extinction.",
        },
      ],
    },
  ],
  u5: [
    {
      id: "u5-life",
      title: "Characteristics of Living Things",
      zh: "生命体的特征",
      big: "The 7–9 traits all living things share. Viruses fail several of these.",
      bigZh: "所有生物共有的特征。病毒缺少其中几项。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Made of cells 细胞", "Cells are the basic unit of life", ""],
            ["Respiration 呼吸", "Releases energy from food", ""],
            ["Sensitivity 反应", "Responds to stimuli", ""],
            ["Growth 生长", "Grows and develops", ""],
            ["Reproduction 繁殖", "Produces offspring", ""],
            ["Nutrition 营养", "Obtains or makes food", ""],
            ["Excretion 排泄", "Removes waste", ""],
            ["Organization 组织", "Has levels of organisation", ""],
            ["Locomotion 运动", "Ability to move", ""],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Living things are made of cells, obtain and use energy, respond to the environment, grow and develop, reproduce, carry out respiration, excrete waste, and have different levels of organisation.",
        },
      ],
    },
    {
      id: "u5-virusalive",
      title: "Are Viruses Living?",
      zh: "病毒是否有生命",
      big: "Viruses have some life-like features but lack others — usually classed as non-living.",
      bigZh: "病毒有部分生命特征,但缺很多,通常被视为非生命。",
      blocks: [
        {
          type: "compare",
          head: ["Viruses HAVE 有", "Viruses LACK 缺少"],
          rows: [
            ["Genetic material (DNA/RNA)", "Cells — not made of cells"],
            ["Can replicate inside host cells", "Organelles (no nucleus, ribosomes...)"],
            ["Can mutate & evolve", "Independent metabolism & reproduction"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "Viruses are hard to classify because they have some characteristics of life but lack others. They contain genetic material and can reproduce inside host cells, but they are not made of cells, have no organelles, cannot carry out metabolism, and cannot reproduce independently. So they are often considered non-living biological structures.",
        },
      ],
    },
    {
      id: "u5-virusstruct", title: "Virus Structure",
      zh: "病毒结构",
      big: "Genetic material + capsid, sometimes envelope + attachment proteins.",
      bigZh: "遗传物质 + 衣壳,有时有包膜 + 附着蛋白。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Nucleic acid core 核酸核心", "Viral genome — DNA or RNA", ""],
            ["Capsid 衣壳", "Protein coat protecting the genome", ""],
            ["Attachment proteins 附着蛋白", "Bind to specific host-cell receptors (like a key)", ""],
            ["Envelope 包膜", "Lipid membrane — only SOME viruses have it", ""],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "A virus contains genetic material (DNA or RNA) surrounded by a protein coat called a capsid. Some viruses also have a lipid envelope and attachment proteins that help them bind to host cells.",
        },
      ],
    },
    {
      id: "u5-phage", title: "Bacteriophage Structure",
      zh: "噬菌体结构",
      big: "A virus that infects bacteria — head, tail, base plate, tail fibers.",
      bigZh: "感染细菌的病毒——头部、尾部、基板、尾纤维。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Icosahedral head 头部", "Holds capsid + nucleic acid core", ""],
            ["Tail 尾部", "Injects genetic material into bacteria", ""],
            ["Base plate 基板", "Helps attach to bacterial surface", ""],
            ["Tail fibers 尾纤维", "Recognise & bind the host cell", ""],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "A bacteriophage is a virus that infects bacteria. It has an icosahedral head containing the capsid and nucleic acid core, plus a tail, base plate, and tail fibers that help it attach to a bacterial cell and inject its genetic material.",
        },
      ],
    },
    {
      id: "u5-agents",
      title: "Four Infectious Agents",
      zh: "比较四类感染因子",
      big: "Phage, retrovirus, viroid, prion — compare genome, structure, host.",
      bigZh: "噬菌体、逆转录病毒、类病毒、朊病毒。",
      blocks: [
        {
          type: "compare",
          head: ["Type", "Genome", "Structure", "Host", "Example"],
          wide: true,
          rows: [
            ["Bacteriophage", "Usually DNA", "Head, tail, base plate, fibers", "Bacteria", "T4 phage"],
            ["Retrovirus", "RNA", "Capsid, envelope, reverse transcriptase", "Humans/animals", "HIV"],
            ["Viroid", "RNA only", "No capsid, no protein coat", "Plants", "Potato spindle tuber"],
            ["Prion", "None", "Misfolded protein only", "Humans/animals", "Mad cow disease"],
          ],
        },
        {
          type: "answer",
          label: "Key comparison",
          text: "A viroid is RNA only and infects plants. A prion is misfolded protein only, with no DNA or RNA. A retrovirus is an RNA virus that uses reverse transcriptase to make DNA from RNA; HIV is an example.",
        },
      ],
    },
    {
      id: "u5-lytic", title: "Lytic Cycle",
      zh: "裂解周期",
      big: "Fast viral replication that bursts and kills the host cell.",
      bigZh: "快速复制,使宿主细胞裂解死亡。",
      blocks: [
        {
          type: "ladder",
          items: [
            ["Attachment 附着", "Virus binds host receptors", "1"],
            ["Entry 进入", "Enters / injects DNA-RNA", "2"],
            ["Synthesis 合成", "Host makes viral parts", "3"],
            ["Assembly 组装", "New viruses assembled", "4"],
            ["Release 释放", "Host bursts, viruses leave", "5"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "In the lytic cycle the virus first attaches to receptors on the host cell, then enters or injects its genetic material. The host makes viral DNA/RNA and proteins, new viruses are assembled, and finally they are released, usually bursting and killing the host cell.",
        },
      ],
    },
    {
      id: "u5-lysogenic", title: "Lytic vs Lysogenic",
      zh: "裂解 vs 溶原",
      big: "Lytic kills fast; lysogenic hides viral DNA inside the host genome.",
      bigZh: "裂解快速杀细胞;溶原把病毒DNA藏进宿主基因组。",
      blocks: [
        {
          type: "compare",
          head: ["", "Lytic 裂解", "Lysogenic 溶原"],
          rows: [
            ["Speed", "Fast, viruses made now", "Inactive for a time"],
            ["Viral DNA", "Replicates immediately", "Integrates into host DNA"],
            ["Host cell", "Bursts and dies", "Lives; DNA copied with host"],
          ],
        },
        {
          type: "answer",
          label: "Full-mark",
          text: "The lytic cycle quickly produces new viruses and usually kills the host when they are released. In the lysogenic cycle the viral DNA integrates into the host DNA and stays inactive, copied with the host's DNA, and may later enter the lytic cycle.",
        },
        {
          type: "tip",
          text: "Latency 潜伏: a latent virus stays inactive with no symptoms; stress, illness, or weakened immunity can reactivate it into the lytic cycle. (HIV is the classic example.)",
        },
      ],
    },
    {
      id: "u5-prokaryote",
      title: "Prokaryotes vs Eukaryotes",
      zh: "原核 vs 真核",
      big: "Prokaryotes have no nucleus and no membrane-bound organelles.",
      bigZh: "原核生物没有细胞核,没有膜结合细胞器。",
      blocks: [
        {
          type: "compare",
          head: ["Prokaryote only", "Both", "Eukaryote only"],
          rows: [
            ["No nucleus", "DNA, ribosomes", "Has nucleus"],
            ["Circular DNA in nucleoid", "Cytoplasm, membrane", "Membrane-bound organelles"],
            ["Bacteria & archaea", "Metabolism", "Linear chromosomes"],
            ["Binary fission", "Can reproduce", "Animals, plants, fungi, protists"],
          ],
        },
        {
          type: "tip",
          text: "Bacteria vs Archaea: both unicellular prokaryotes, but Bacteria have peptidoglycan cell walls and Archaea do NOT. Archaea often live in extreme environments (methanogens, halophiles, thermophiles) and are genetically closer to eukaryotes.",
        },
      ],
    },
    {
      id: "u5-bacteria", title: "Bacteria: Structure & Shapes",
      zh: "细菌结构与形状",
      big: "Know each structure's job, the three shapes, and Gram staining.",
      bigZh: "记住每个结构的功能、三种形状、革兰氏染色。",
      blocks: [
        {
          type: "rules",
          items: [
            ["Capsule 荚膜", "Protection; helps attach", ""],
            ["Cell wall 细胞壁", "Shape & protection; peptidoglycan", ""],
            ["Cell membrane 细胞膜", "Controls what enters/leaves", ""],
            ["Nucleoid 拟核", "Region with main circular DNA", ""],
            ["Plasmid 质粒", "Small circular DNA; useful genes", ""],
            ["Pili 菌毛", "Attachment & DNA transfer", ""],
            ["Flagella 鞭毛", "Movement", ""],
          ],
        },
        {
          type: "rules",
          items: [
            ["Cocci 球菌", "Spherical / round", ""],
            ["Bacilli 杆菌", "Rod-shaped", ""],
            ["Spirilli 螺旋菌", "Spiral-shaped", ""],
          ],
        },
        {
          type: "compare",
          head: ["Gram stain", "Cell wall", "Colour"],
          rows: [
            ["Gram-positive", "Thick peptidoglycan", "Purple / violet"],
            ["Gram-negative", "Thin peptidoglycan + outer membrane", "Red / pink"],
          ],
        },
      ],
    },
    {
      id: "u5-bactlife",
      title: "Bacterial Nutrition & Reproduction",
      zh: "细菌营养与繁殖",
      big: "How bacteria feed, breathe, divide, and swap genes.",
      bigZh: "细菌如何取食、呼吸、繁殖、交换基因。",
      blocks: [
        {
          type: "compare",
          head: ["Nutrition type", "How", "Example"],
          rows: [
            ["Photoautotroph", "Light → food (photosynthesis)", "Cyanobacteria"],
            ["Chemoautotroph", "Chemical energy from inorganics", "Nitrifying bacteria"],
            ["Saprophytic", "Feed on dead matter", "Soil decomposers"],
            ["Parasitic", "Nutrients from living hosts", "Disease-causing bacteria"],
          ],
        },
        {
          type: "tip",
          text: "Respiration: aerobic = needs oxygen · anaerobic = no oxygen (fermentation). Obligate anaerobe = can ONLY live without oxygen.",
        },
        {
          type: "answer",
          label: "Binary fission",
          text: "Bacteria reproduce asexually by binary fission: the DNA is copied, the cell grows, the copies separate, and the cell divides into two genetically identical daughter cells.",
        },
        {
          type: "answer",
          label: "Conjugation",
          text: "In conjugation, two bacteria connect via a pilus and a plasmid is copied and transferred, giving the recipient new genes. This increases genetic variation and can spread antibiotic-resistance genes.",
        },
        {
          type: "tip",
          text: "Endospore 内生孢子: a dormant, protective structure letting bacteria survive heat, dryness, lack of nutrients. Honey may carry Clostridium botulinum endospores → infant botulism.",
        },
      ],
    },
    {
      id: "u5-antibiotics",
      title: "Antibiotics & Resistance",
      zh: "抗生素与耐药性",
      big: "Antibiotics treat bacteria, NOT viruses. Resistance evolves by natural selection.",
      bigZh: "抗生素治细菌,不治病毒。耐药性靠自然选择进化。",
      blocks: [
        {
          type: "compare",
          head: ["Type", "Function", "Example"],
          rows: [
            ["Bacteriostatic", "Stops growth/reproduction", "Tetracycline"],
            ["Bactericidal", "Kills bacteria", "Penicillin"],
          ],
        },
        {
          type: "answer",
          label: "How resistance develops",
          text: "Antibiotic resistance develops through natural selection. Some bacteria have mutations that make them resistant. When antibiotics are used, non-resistant bacteria die but resistant ones survive, reproduce, and pass on the resistance genes, so the population becomes more resistant over time.",
        },
        {
          type: "tip",
          text: "Spread of resistance: vertical (to offspring) + horizontal/conjugation (plasmid transfer). Reduce it: use only when needed, finish the full course, isolate resistant cases, good hygiene.",
        },
      ],
    },
    {
      id: "u5-disease",
      title: "Pathogens & Infectious Disease",
      zh: "病原体与感染性疾病",
      big: "A pathogen causes disease; an infectious disease can spread between hosts.",
      bigZh: "病原体导致疾病;感染性疾病能在宿主间传播。",
      blocks: [
        {
          type: "compare",
          head: ["Pathogen type", "Example", "Disease"],
          rows: [
            ["Fungus", "Athlete's foot fungus", "Athlete's foot"],
            ["Protist", "Plasmodium", "Malaria"],
            ["Parasite", "Tapeworm", "Tapeworm infection"],
            ["Bacterium", "Salmonella", "Food poisoning"],
            ["Virus", "Influenza virus", "Flu"],
          ],
        },
        {
          type: "rules",
          items: [
            ["Direct transmission 直接", "Person to person — droplets, contact, sexual", ""],
            ["Indirect transmission 间接", "Via food, water, spores, vectors, fomites", ""],
            ["Reservoir 储存宿主", "Where a pathogen normally lives/survives", "animal, soil, water"],
            ["Vector 传播媒介", "Organism that carries & transmits a pathogen", "mosquito, tick"],
          ],
        },
        {
          type: "compare",
          head: ["Scale", "Meaning", "Example"],
          rows: [
            ["Endemic", "Always present in a region", "Malaria in tropics"],
            ["Epidemic", "Sudden rise in one area", "Flu outbreak in a city"],
            ["Pandemic", "Spread across many countries", "COVID-19"],
          ],
        },
        {
          type: "tip",
          text: "Koch's postulates: (1) pathogen in all sick, not healthy; (2) isolate & grow in pure culture; (3) it causes the same disease in a healthy host; (4) re-isolate the same pathogen.",
        },
      ],
    },
    {
      id: "u5-immune", title: "The Immune System",
      zh: "免疫系统",
      big: "Three kinds of immunity: innate, adaptive, passive.",
      bigZh: "三种免疫:先天、适应性、被动。",
      blocks: [
        {
          type: "compare",
          head: ["Type", "Speed", "Specific?", "Memory?", "Source"],
          wide: true,
          rows: [
            ["Innate 先天", "Fast", "No", "No", "Born with it (skin, macrophages)"],
            ["Adaptive 适应性", "Slow first time", "Yes", "Yes", "Made after exposure (B/T cells, antibodies)"],
            ["Passive 被动", "Fast", "Yes", "No", "Antibodies from outside (breast milk, injection)"],
          ],
        },
        {
          type: "rules",
          items: [
            ["First line 第一道防线", "Skin, mucus, tears, sweat, stomach acid, urine", "physical/chemical barriers"],
            ["Macrophage 巨噬细胞", "Engulf & digest pathogens — nonspecific", "phagocytosis"],
            ["Lymphocyte 淋巴细胞", "B cells make antibodies; T cells kill infected cells — specific", ""],
            ["Antigen 抗原", "Foreign molecule that triggers immune response", ""],
            ["Antibody 抗体", "Protein from B cells; binds a specific antigen (lock & key)", ""],
          ],
        },
      ],
    },
    {
      id: "u5-vaccine",
      title: "Vaccines & Herd Immunity",
      zh: "疫苗与群体免疫",
      big: "Vaccines train the immune system; herd immunity protects the vulnerable.",
      bigZh: "疫苗训练免疫系统;群体免疫保护脆弱人群。",
      blocks: [
        {
          type: "answer",
          label: "What vaccines contain",
          text: "Vaccines contain weakened or inactive pathogens, parts of pathogens, or antigens that stimulate the immune system without causing serious disease.",
        },
        {
          type: "answer",
          label: "Herd immunity",
          text: "Herd immunity occurs when enough people in a population are immune, so a pathogen has fewer chances to spread. This protects people who are not immune or cannot be vaccinated, such as infants or immunocompromised people.",
        },
        {
          type: "tip",
          text: "Why a new flu vaccine each year? The flu virus mutates quickly, so its antigens change and the vaccine must match circulating strains. Smallpox is the only human disease eradicated worldwide.",
        },
      ],
    },
  ],
};

// ---------- FLASHCARDS ----------------------------------------;

export const FLASHCARDS = {
  u1: [
    ["What happens in S phase?", "DNA replicates — each chromosome is copied."],
    ["What three phases make up interphase?", "G1, S, and G2."],
    ["What is G0?", "A resting or specialised state — the cell is not preparing to divide."],
    ["How many chromosomes are in a human somatic cell?", "46 (diploid, 23 pairs)."],
    ["Why must cells stay small?", "As radius grows, volume rises faster than surface area, so SA:V falls and material exchange becomes inefficient."],
    ["List the 5 stages of mitosis in order.", "Prophase → Prometaphase → Metaphase → Anaphase → Telophase."],
    ["Where do chromosomes line up in mitosis?", "Metaphase — at the cell equator."],
    ["What separates in Anaphase of mitosis?", "Sister chromatids."],
    ["What is cytokinesis?", "Division of the cytoplasm into two separate daughter cells, after mitosis."],
    ["Which proteins push the cell cycle forward?", "CDK-cyclins, made from proto-oncogenes."],
    ["What does p53 do?", "Tumour suppressor — stops the cell cycle when DNA is damaged."],
    ["What is apoptosis?", "Programmed cell death — orderly self-destruction of damaged or unwanted cells."],
    ["What stage of cancer means it has metastasised?", "Stage IV."],
    ["How many cells does meiosis produce, and what kind?", "Four haploid cells, each genetically different."],
    ["When and where does crossing over occur?", "Prophase I of meiosis, between non-sister chromatids of homologous chromosomes."],
    ["What separates in Meiosis I vs Meiosis II?", "Meiosis I: homologous chromosomes. Meiosis II: sister chromatids."],
    ["Define genotype vs phenotype.", "Genotype = genetic makeup (Bb). Phenotype = visible trait (e.g. brown eyes)."],
    ["State Mendel's Law of Segregation.", "Allele pairs separate when gametes form; each gamete gets ONE allele."],
    ["State the Law of Independent Assortment.", "Different gene pairs distribute independently when gametes form."],
    ["F2 phenotype ratio of Bb × Bb?", "3 : 1 dominant to recessive."],
    ["F2 phenotype ratio of dihybrid AaBb × AaBb?", "9 : 3 : 3 : 1."],
    ["Red flower (RR) × white flower (rr) → all pink — which pattern?", "Incomplete dominance."],
    ["Genotype of blood type O?", "ii — two recessive alleles."],
    ["Why is AB the universal recipient?", "AB blood has both A and B antigens but NO anti-A or anti-B antibodies."],
    ["What is epistasis?", "One gene masking the effect of a completely different gene (e.g. Labrador coat colour)."],
    ["Why are males more often affected by X-linked recessive diseases?", "Males (XY) have only one X, so a single recessive allele is enough to show the trait."],
    ["What causes the patchy coat of calico cats?", "Random X-inactivation (dosage compensation) in female cells."],
  ],
  u2: [
    ["Define mutation.", "A change in the DNA base sequence within a gene."],
    ["Two causes of mutations?", "Inherited from parents; OR caused by mutagens (UV, chemicals, X-rays); OR random copying errors."],
    ["Gene mutation vs chromosomal mutation?", "Gene mutation affects one gene; chromosomal mutation affects whole chromosomes or large sections."],
    ["UAC → UAU, both = tyrosine. Mutation type?", "Silent mutation."],
    ["UAC → CAC, amino acid changes. Mutation type?", "Missense mutation."],
    ["Why is an early nonsense mutation usually harmful?", "It creates a stop codon too early → very short, usually nonfunctional protein."],
    ["Why does inserting ONE base do more damage than substituting one?", "It shifts the reading frame, changing every codon after the insertion (frameshift)."],
    ["Is deleting 3 bases always a frameshift?", "No — 3 bases = one full codon removed, but the frame is not shifted."],
    ["ABCDEF → ABBCDEF. What mutation?", "Duplication."],
    ["ABCDEF → AEDCBF. What mutation?", "Inversion."],
    ["ABCDEF → swaps a piece with another chromosome. What mutation?", "Translocation."],
    ["Are mutations always bad?", "No — they can be neutral, harmful, or beneficial. They provide the variation evolution needs."],
    ["What did Griffith discover?", "Transformation — heat-killed S strain + live R strain → live R became deadly S."],
    ["What did Hershey-Chase show?", "Only DNA (not protein) enters bacteria during phage infection → DNA is the genetic material."],
    ["Three parts of a DNA nucleotide?", "Phosphate group + deoxyribose sugar + nitrogenous base."],
    ["DNA backbone is made of?", "Alternating sugar and phosphate."],
    ["Name the two purines.", "Adenine and Guanine (double-ring)."],
    ["Name the two pyrimidines.", "Cytosine and Thymine (single-ring)."],
    ["Complementary strand of ATCTGAG?", "TAGACTC."],
    ["What does 'antiparallel' mean?", "The two DNA strands run in opposite directions — one 5'→3', the other 3'→5'."],
    ["Define semi-conservative replication.", "Each new DNA molecule has ONE old strand and ONE newly synthesised strand."],
    ["Function of helicase?", "Unwinds DNA by breaking hydrogen bonds between bases."],
    ["Function of DNA polymerase?", "Adds new nucleotides in the 5' → 3' direction to build new strands."],
    ["Function of DNA ligase?", "Joins Okazaki fragments on the lagging strand."],
    ["Why does the lagging strand form Okazaki fragments?", "DNA polymerase only builds 5' → 3', so the strand running the 'wrong way' must be built in short pieces."],
    ["Write the central dogma.", "DNA → RNA → Protein."],
    ["Two main stages of gene expression?", "Transcription (DNA → mRNA) and translation (mRNA → protein)."],
    ["DNA template TAC GGC → mRNA = ?", "AUG CCG (note: T→A, A→U in RNA, C→G, G→C)."],
    ["Which base replaces thymine in RNA?", "Uracil (U)."],
    ["DNA sugar vs RNA sugar?", "DNA = deoxyribose; RNA = ribose."],
    ["How many bases in one codon?", "Three."],
    ["A 360-base mRNA codes for how many codons?", "120 codons."],
    ["What is the start codon, and which amino acid does it code for?", "AUG → methionine."],
    ["The three stop codons?", "UAA, UAG, UGA."],
    ["mRNA codon AUG pairs with which tRNA anticodon?", "UAC."],
    ["What happens at the A site of a ribosome?", "A new aminoacyl-tRNA arrives."],
    ["What does a positive transcription factor do?", "Increases / activates transcription of a gene."],
    ["Name two applications of the Human Genome Project.", "DNA fingerprinting, pharmacogenomics, gene therapy, personalised medicine, cancer research (any two)."],
    ["What is a transgenic organism?", "An organism with a foreign gene deliberately inserted into its genome."],
    ["Why are plasmids useful as vectors?", "They can carry foreign DNA into cells and replicate independently inside them."],
    ["Give an example of a transgenic organism.", "Golden Rice / GloFish / Bt crops / insulin-producing bacteria."],
    ["One concern about transgenic organisms?", "Biodiversity loss, animal welfare, genetic privacy, ecological spread of new genes, gene patents."],
  ],
  u3: [
    ["Name three theories of life's origin.", "Electric spark, clay, deep-sea vents, chilly start, RNA world, simple beginnings, panspermia (any three)."],
    ["Which origin theory focuses on RNA as early genetic material?", "RNA world."],
    ["Which theory suggests life came from space?", "Panspermia."],
    ["What does the electric spark idea suggest?", "Energy (e.g. lightning) helped form organic molecules from simple chemicals — it doesn't create full cells."],
    ["Why is RNA a good early-life candidate?", "RNA can store genetic information AND some RNAs can catalyse reactions (ribozymes)."],
    ["What does endosymbiotic theory state?", "Mitochondria and chloroplasts originated from free-living prokaryotes engulfed by another cell."],
    ["Which organelle likely came from cyanobacteria?", "Chloroplast."],
    ["Which organelle likely came from proteobacteria?", "Mitochondrion."],
    ["Give two pieces of evidence for endosymbiosis.", "Double membranes; own circular DNA; bacterial-type ribosomes; independent binary fission (any two)."],
    ["What were Lamarck's two ideas?", "Use & disuse, and inheritance of acquired characteristics."],
    ["Why was Lamarckism rejected?", "Acquired (non-genetic) characteristics are not heritable."],
    ["Lamarck's giraffe-neck explanation?", "Giraffes stretch their necks during life and pass the longer necks on to offspring."],
    ["Darwin's giraffe-neck explanation?", "Heritable variation in neck length already existed; longer-necked individuals survived & reproduced more."],
    ["List the four conditions for natural selection.", "Overproduction of offspring; heritable variation; competition (limited resources); differential survival & reproduction."],
    ["Do individuals evolve?", "No — populations evolve over generations."],
    ["What does 'fitness' mean biologically?", "Ability to survive AND reproduce successfully (not just strength)."],
    ["Why is heritable variation required?", "Without it, selection can't change trait frequencies between generations."],
    ["DNA sequence similarity is which type of evidence?", "Molecular / biochemical evidence."],
    ["Similar forelimb bones in human, bat, whale = which evidence?", "Anatomical evidence (homologous structures)."],
    ["Why are fossils useful?", "They show organisms and changes across geological time."],
    ["Give two structural adaptations.", "Opposable thumb, bipedalism, thick succulent leaves (any two)."],
    ["Before industrial pollution, which peppered moth was more common?", "Light / cream coloured."],
    ["Why did dark peppered moths thrive during the industrial revolution?", "Polluted tree bark was dark, so dark moths were better camouflaged → higher survival → more reproduction."],
    ["Is migration a structural or behavioural adaptation?", "Behavioural."],
    ["What is coadaptation?", "When two species adapt in relation to each other (e.g. flowers and pollinators)."],
    ["What is mimicry?", "One species resembling another, often to gain a survival advantage (e.g. king snake resembling coral snake)."],
    ["How do mutation, variation, fitness, and adaptation connect?", "Mutation creates variation; variation gives differences in fitness; selection favours higher fitness; over generations, favoured traits become adaptations."],
  ],
  u4: [
    ["What is taxonomy?", "The science of naming, describing, and classifying organisms."],
    ["Who developed binomial nomenclature, and when?", "Carl Linnaeus, 18th century (1707-1778, Swedish)."],
    ["Order of classification levels?", "Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species."],
    ["What is the full classification of the Giant Panda?", "Eukarya, Animalia, Chordata, Mammalia, Carnivora, Ursidae, Ailuropoda, melanoleuca."],
    ["Name the three domains.", "Bacteria, Archaea, Eukarya."],
    ["What is binomial nomenclature?", "A two-part naming system using genus (capitalised) + specific epithet (lower-case), italicised, e.g. Homo sapiens."],
    ["In Quercus albus, what is the genus?", "Quercus — the first word is always the genus."],
    ["Linnaeus vs modern taxonomy?", "Linnaeus used physical similarities; modern adds DNA, genetics & evolutionary relationships."],
    ["What does a molecular clock measure?", "How long ago species shared a common ancestor, by comparing DNA/protein differences."],
    ["Three molecular techniques in systematics?", "DNA hybridization, PCR (polymerase chain reaction), and DNA sequencing."],
    ["What is a clade (monophyletic group)?", "A common ancestor PLUS all of its descendants."],
    ["What does a node represent in a cladogram?", "A common ancestor."],
    ["What is a derived character?", "A new trait shared by descendants (e.g. jaws, lungs, fur)."],
    ["Phylogenetic trees show which type of evolution?", "Divergent evolution — species diverging from common ancestors."],
    ["What is a dichotomous key?", "A tool that identifies organisms through a series of paired (two-choice) statements."],
    ["Adaptive radiation?", "ONE ancestor rapidly forming many species to fill different niches (e.g. Darwin's finches)."],
    ["Divergent evolution?", "Related species growing MORE different over time (same ancestor)."],
    ["Convergent evolution?", "Unrelated species developing SIMILAR traits independently (e.g. wings of bats, birds, insects)."],
    ["Which kingdom has peptidoglycan walls?", "Bacteria."],
    ["Plant cell walls are made of...?", "Cellulose. (Fungi = chitin.)"],
    ["Three types of biodiversity?", "Genetic, species, and ecosystem diversity."],
    ["Name three threats to biodiversity.", "Habitat destruction, pollution, invasive species (also climate change, overhunting)."],
    ["List 5 reasons classification matters.", "Catalogue biodiversity, communicate among scientists, understand evolution, identify new species, support conservation."],
  ],
  u5: [
    ["What are viruses made of?", "Genetic material, a capsid, and sometimes an envelope + attachment proteins."],
    ["Why are viruses not fully living?", "Not made of cells, no organelles, no metabolism, can't reproduce without a host."],
    ["What does a capsid do?", "Protects the viral genetic material."],
    ["What do attachment proteins do?", "Help the virus bind to host-cell receptors."],
    ["What does a bacteriophage infect?", "Bacteria."],
    ["What's special about a prion?", "Made only of misfolded protein — no DNA or RNA."],
    ["What's special about a viroid?", "Made only of RNA and infects plants."],
    ["Example of a retrovirus?", "HIV."],
    ["List the lytic cycle steps.", "Attachment → Entry → Synthesis → Assembly → Release."],
    ["Lytic vs lysogenic?", "Lytic makes viruses fast & kills the host; lysogenic integrates viral DNA and stays inactive."],
    ["Prokaryote vs eukaryote?", "Prokaryotes have no nucleus or membrane-bound organelles; eukaryotes have both."],
    ["Bacteria vs Archaea?", "Both prokaryotes; bacteria have peptidoglycan, archaea don't & often live in extreme habitats."],
    ["Three bacterial shapes?", "Cocci = round, bacilli = rod, spirilli = spiral."],
    ["Gram-positive vs negative colour?", "Positive = purple (thick peptidoglycan); negative = pink/red (thin)."],
    ["What is binary fission?", "Asexual reproduction: DNA copies, cell divides into two identical daughter cells."],
    ["What is conjugation?", "Genetic exchange — plasmid DNA transfers between bacteria through a pilus."],
    ["How does antibiotic resistance develop?", "Natural selection: mutations + antibiotic pressure → resistant survivors reproduce."],
    ["Do antibiotics work on viruses?", "No — only on bacteria."],
    ["Reservoir vs vector?", "Reservoir = where pathogen lives; vector = organism that carries & spreads it."],
    ["Endemic / epidemic / pandemic?", "Always present / sudden local rise / spread across many countries."],
    ["Innate vs adaptive immunity?", "Innate = fast, nonspecific, no memory; adaptive = specific, has memory (B/T cells)."],
    ["What is passive immunity?", "Antibodies from outside — immediate but short-lived, no memory."],
    ["What does an antibody do?", "A B-cell protein that binds a specific antigen (lock & key)."],
    ["Why is herd immunity important?", "Enough immune people → less spread → protects those who can't be vaccinated."],
  ],
};

// ---------- QUIZ ----------------------------------------------;

export const QUIZ = {
  u1: [
    { q: "DNA replication occurs during which phase?", o: ["G1", "S", "G2", "M"], a: 1, e: "S = Synthesis phase, when DNA is copied so each daughter cell gets a full set." },
    { q: "As a spherical cell's radius increases, the SA:V ratio:", o: ["Increases", "Stays the same", "Decreases", "Increases then decreases"], a: 2, e: "Volume grows faster than surface area (r³ vs r²), so the ratio falls." },
    { q: "Which phases make up interphase?", o: ["Only M", "G1, S, and G2", "Only G1 and G2", "S and M"], a: 1, e: "Interphase = G1 + S + G2 (cell grows and copies DNA before dividing)." },
    { q: "How many chromosomes are in a human somatic cell?", o: ["23", "46", "92", "44"], a: 1, e: "Humans are diploid: 46 chromosomes (23 pairs)." },
    { q: "A cell in G0 is:", o: ["Replicating DNA", "Dividing", "Resting or specialised, not preparing to divide", "In mitosis"], a: 2, e: "G0 cells have exited the cycle for now — e.g. neurons, muscle." },
    { q: "Chromosomes line up at the equator during:", o: ["Prophase", "Anaphase", "Metaphase", "Telophase"], a: 2, e: "Metaphase — chromosomes neatly aligned on the metaphase plate." },
    { q: "Mitosis produces daughter cells that are:", o: ["Haploid and different", "Diploid and genetically identical", "Haploid and identical", "Diploid and different"], a: 1, e: "Mitosis → 2 identical diploid cells for growth/repair." },
    { q: "The nuclear envelope breaks down during:", o: ["Prophase", "Prometaphase", "Metaphase", "Anaphase"], a: 1, e: "Prometaphase is when the nuclear envelope disassembles so spindle fibers can reach chromosomes." },
    { q: "Sister chromatids separate in:", o: ["Prophase", "Metaphase", "Anaphase", "Telophase"], a: 2, e: "Anaphase — the centromere splits and chromatids move to opposite poles." },
    { q: "Which protein is encoded by a proto-oncogene and pushes the cycle forward?", o: ["p53 and Rb", "CDK-cyclins", "Antibodies", "Histones"], a: 1, e: "CDK-cyclins are the stimulating regulators, made from proto-oncogenes." },
    { q: "p53:", o: ["Promotes division", "Is from a proto-oncogene", "Stops the cycle when DNA is damaged", "Only exists in cancer cells"], a: 2, e: "p53 is a tumour suppressor — it halts the cycle so damaged DNA can be repaired." },
    { q: "Apoptosis is best described as:", o: ["Accidental cell death (necrosis)", "Programmed cell death", "Uncontrolled division", "DNA copying"], a: 1, e: "Apoptosis is an orderly, programmed self-destruction." },
    { q: "Cancer Stage IV means:", o: ["Early local", "In situ", "Cells have metastasised", "Cured"], a: 2, e: "Stage IV = cancer has spread to distant organs (metastasis)." },
    { q: "Meiosis produces:", o: ["2 identical diploid", "2 different haploid", "4 different haploid", "4 identical diploid"], a: 2, e: "Two divisions → 4 genetically different haploid daughter cells." },
    { q: "Crossing over happens during:", o: ["Metaphase I", "Prophase I", "Anaphase II", "Anaphase I"], a: 1, e: "Prophase I — homologous chromosomes pair up and exchange segments." },
    { q: "Meiosis I primarily separates:", o: ["Sister chromatids", "DNA strands", "Homologous chromosomes", "Chromatin"], a: 2, e: "Meiosis I = separation of homologs; Meiosis II = separation of sister chromatids." },
    { q: "An example of GENOTYPE is:", o: ["Purple flower", "Tall stem", "Gg", "Brown eyes"], a: 2, e: "Genotype is the letter combination; phenotype is the observable trait." },
    { q: "Bb × Bb — what fraction are bb (white)?", o: ["0%", "25%", "50%", "75%"], a: 1, e: "Punnett: BB(25) Bb(50) bb(25). bb = 25%." },
    { q: "Dihybrid F2 phenotype ratio?", o: ["1:1:1:1", "3:1", "9:3:3:1", "1:2:1"], a: 2, e: "AaBb × AaBb → F2 = 9:3:3:1." },
    { q: "Testcross gives 1:1 offspring. The unknown parent is:", o: ["AA (homozygous dominant)", "Aa (heterozygous)", "aa (homozygous recessive)", "Cannot tell"], a: 1, e: "1:1 dominant:recessive means the unknown was Aa × aa." },
    { q: "Red × White → all Pink. This is:", o: ["Complete dominance", "Incomplete dominance", "Co-dominance", "Epistasis"], a: 1, e: "Heterozygote shows an INTERMEDIATE phenotype (pink) — incomplete dominance." },
    { q: "Genotype for blood type O is:", o: ["IᴬIᴮ", "Iᴬi", "ii", "IᴮIᴮ"], a: 2, e: "Type O = ii, two recessive alleles, no A or B antigens." },
    { q: "AB blood can receive from:", o: ["Only AB", "Only O", "Any blood type (universal recipient)", "Only A and B"], a: 2, e: "AB plasma has no anti-A or anti-B antibodies — universal recipient." },
    { q: "Why are males more often affected by X-linked recessive disorders?", o: ["More X chromosomes", "Only one X — no second X to mask the recessive allele", "Y carries dominant genes", "Weaker immune system"], a: 1, e: "Males are hemizygous for X — a single recessive allele expresses immediately." },
    { q: "A Labrador with genotype eeBB will be:", o: ["Black", "Brown (chocolate)", "Yellow", "White"], a: 2, e: "ee blocks pigment regardless of B — yellow Lab. Epistasis." },
    // ---- Mock-exam questions + variations (Unit 1) ----
    { q: "Which of the following does NOT occur during interphase?", o: ["G1 phase", "S phase", "Metaphase", "G2 phase"], a: 2, e: "Metaphase is part of mitosis (M phase). Interphase is only G1, S and G2." },
    { q: "The mitosis (M) checkpoint — the spindle-assembly checkpoint — specifically checks that:", o: ["chromosomes are attached to the spindle and lined up before anaphase", "there are no mutations in the DNA", "the DNA has finished replicating", "the cell is large enough"], a: 0, e: "Just before anaphase the M checkpoint confirms every chromosome is correctly attached to spindle fibres, so the chromatids separate evenly. DNA-quality checks happen at G1/S; size is checked at G1." },
    { q: "A loss-of-function mutation in a tumour-suppressor gene tends to cause:", o: ["too little cell division", "too much cell division", "no change in division", "immediate apoptosis"], a: 1, e: "Tumour suppressors (e.g. p53) normally brake division. Lose that function → the brakes fail → too much division → possible cancer." },
    { q: "The production of sperm by meiosis is called ___ and yields ___ functional cells.", o: ["oogenesis; 1", "spermatogenesis; 1", "spermatogenesis; 4", "oogenesis; 4"], a: 2, e: "Spermatogenesis makes 4 functional sperm per meiosis. Oogenesis makes only 1 functional egg (plus polar bodies)." },
    { q: "Asexual reproduction does NOT create genetic variation because the offspring are:", o: ["different from the parent", "identical to the parent", "always haploid", "always mutated"], a: 1, e: "Asexual reproduction (mitosis / binary fission) copies the parent exactly — clones — so no new variation." },
    { q: "Which of these is a FULLY differentiated cell?", o: ["embryonic stem cell", "induced pluripotent stem cell", "skin cell", "somatic (adult) stem cell"], a: 2, e: "A skin cell is specialised for one job — fully differentiated. The other three are unspecialised stem cells that can still become other cell types." },
    { q: "Which statement correctly describes stem cells?", o: ["specialised cells that divide by mitosis to make further-specialised cells", "unspecialised cells that divide by mitosis to make cells that can become specialised", "unspecialised cells that divide by meiosis to make specialised cells", "specialised cells that divide by meiosis"], a: 1, e: "Stem cells are UNSPECIALISED and divide by MITOSIS; their daughters may later differentiate into specialised cell types." },
    { q: "Which row correctly compares mitosis and meiosis? (mitosis / meiosis)", o: ["4 daughter cells / 2 daughter cells", "genetically different / genetically identical", "chromosome number stays the same / chromosome number is halved", "two divisions / four divisions"], a: 2, e: "Mitosis keeps the chromosome number (diploid→diploid); meiosis halves it (diploid→haploid). Mitosis = 1 division → 2 identical cells; meiosis = 2 divisions → 4 varied cells." },
    { q: "A man heterozygous for type A blood (Iᴬi) has children with a type O woman (ii). Chance a child is type O?", o: ["0%", "25%", "50%", "75%"], a: 2, e: "Iᴬi × ii → ½ Iᴬi (type A) and ½ ii (type O). So 50% type O." },
    { q: "A type AB father (IᴬIᴮ) and a type O mother (ii) have a child. Chance the child is type O?", o: ["0%", "25%", "50%", "100%"], a: 0, e: "IᴬIᴮ × ii → every child is Iᴬi or Iᴮi (type A or B). A type-AB parent can never have a type-O child → 0%." },
    { q: "A dragon heterozygous for fire (Ff) and wings (Ww) mates with a partner homozygous dominant for both (FFWW). What % of offspring breathe fire but have NO wings? (W and F dominant)", o: ["0%", "25%", "50%", "100%"], a: 0, e: "Every offspring gets a W from the FFWW parent, so all have wings. 'No wings' (ww) is impossible → 0%." },
    { q: "In a cross FfWw × FfWw, what fraction of offspring show BOTH recessive traits (ffww)?", o: ["1/16", "3/16", "9/16", "1/4"], a: 0, e: "Independent assortment: ff = ¼ and ww = ¼, so ffww = ¼ × ¼ = 1/16." },
    { q: "A father's chromosome is 'AB / ab' and a mother's is 'ab / ab'. A child inherits an 'Ab' chromosome. Where did it come from, and how?", o: ["mother; crossing over", "mother; gene linkage", "father; crossing over", "father; gene linkage"], a: 2, e: "Neither parent carries 'Ab' intact. The father (AB and ab) can make 'Ab' by crossing over between the genes; the mother only has 'ab' — so it must be the father." },
    { q: "Horned cattle are pp (horned recessive; polled P dominant). A farmer's bull is horned (pp). Which cow genotype guarantees NO horned offspring?", o: ["PP", "Pp", "pp", "either Pp or pp"], a: 0, e: "pp × PP → all Pp (polled). With Pp the cow could pass a p, giving ¼ pp (horned). Only PP guarantees every calf inherits a P." },
    { q: "Two unaffected parents have a child with a genetic disorder. The most likely inheritance pattern is:", o: ["autosomal dominant", "autosomal recessive", "X-linked dominant", "Y-linked"], a: 1, e: "When unaffected parents produce an affected child, both are carriers (Aa × Aa) of a recessive allele — classic autosomal recessive." },
    { q: "For an autosomal-recessive disorder, an UNAFFECTED parent who has an affected child (aa) must have the genotype:", o: ["AA", "Aa", "aa", "XᴬY"], a: 1, e: "The affected child is aa, so it got one 'a' from each parent. An unaffected parent who isn't aa must therefore be a carrier, Aa." },
    { q: "Three couples — (A×B), (AB×O), (O×B) — have babies typed B, O and AB. The AB×O couple's child can only be:", o: ["type O", "type AB", "type A or B", "any type"], a: 2, e: "IᴬIᴮ × ii → Iᴬi or Iᴮi only (type A or B); never O or AB. That's the key clue for matching the mixed-up babies." },
    { q: "In Labradors, E allows pigment (ee = no pigment → yellow) and B/b sets black vs brown when pigment is present. Which genotype gives BROWN fur?", o: ["BbEE", "Bbee", "bbEE", "BBEe"], a: 2, e: "Brown needs pigment (at least one E) AND bb → bbEE. Bbee is yellow (ee blocks pigment); the B_ genotypes are black." },
    { q: "One gene (E/e) masking the effect of another gene (B/b) for Labrador coat colour is an example of:", o: ["incomplete dominance", "codominance", "epistasis", "sex linkage"], a: 2, e: "When one gene hides or overrides another gene's expression, that's epistasis (here ee hides the B/b colour)." },
  ],
  u2: [
    { q: "Which is the best definition of a mutation?", o: ["A change in the protein structure", "A change in DNA base sequence", "A change in cell shape", "A change in cytoplasm"], a: 1, e: "A mutation is a change in the DNA base sequence within a gene." },
    { q: "A mutation that changes ONE base from A to G is classified as:", o: ["Chromosomal mutation", "Point (gene) mutation", "Frameshift only", "Translocation"], a: 1, e: "A single-base change in one gene is a point mutation." },
    { q: "UAC and UAU both code for tyrosine. A mutation between them is:", o: ["Silent", "Missense", "Nonsense", "Frameshift"], a: 0, e: "No amino acid change → silent mutation." },
    { q: "UAC changes to UAA. What kind of mutation?", o: ["Silent", "Missense", "Nonsense", "Duplication"], a: 2, e: "UAA is a stop codon — the protein ends prematurely. That's nonsense." },
    { q: "Inserting 1 base into a coding region usually causes:", o: ["No effect", "A silent mutation", "A frameshift", "A duplication"], a: 2, e: "1 base is not a multiple of 3, so every codon after it is shifted (frameshift)." },
    { q: "ABCDEF → AEDCBF. Which chromosomal mutation?", o: ["Deletion", "Duplication", "Inversion", "Translocation"], a: 2, e: "The middle segment was flipped — inversion." },
    { q: "Which experiment confirmed that DNA (not protein) enters bacteria during phage infection?", o: ["Griffith", "Avery–MacLeod–McCarty", "Hershey–Chase", "Mendel"], a: 2, e: "Hershey-Chase used radioactive labels and showed only DNA entered." },
    { q: "Which three parts make up a DNA nucleotide?", o: ["Sugar, RNA, base", "Phosphate, deoxyribose, nitrogenous base", "Protein, sugar, lipid", "Codon, anticodon, amino acid"], a: 1, e: "Phosphate group + deoxyribose sugar + nitrogenous base." },
    { q: "Which pair of bases hydrogen-bond together?", o: ["A-G", "A-T", "C-T", "G-T"], a: 1, e: "A pairs with T (2 H-bonds); C pairs with G (3 H-bonds)." },
    { q: "Adenine and guanine are classified as:", o: ["Pyrimidines (single-ring)", "Purines (double-ring)", "Sugars", "Hormones"], a: 1, e: "Purines = A and G — double-ring." },
    { q: "Complementary strand of ATCTGAG is:", o: ["TAGACTC", "AUCUGAG", "GAGTCAT", "TAGAGCT"], a: 0, e: "A→T, T→A, C→G, G→C, in order: TAGACTC." },
    { q: "Antiparallel means:", o: ["Both strands run 5'→3'", "Strands run in opposite directions (one 5'→3', the other 3'→5')", "Strands are perpendicular", "Strands run identically"], a: 1, e: "Antiparallel = opposite directions." },
    { q: "Semi-conservative replication means:", o: ["Both strands are new", "Both strands are original", "Each new molecule has ONE old strand and ONE new strand", "DNA stays single-stranded"], a: 2, e: "One old, one new per daughter molecule." },
    { q: "Which enzyme unwinds DNA at the replication fork?", o: ["Polymerase", "Helicase", "Ligase", "Primase"], a: 1, e: "Helicase breaks hydrogen bonds between bases." },
    { q: "Which enzyme joins Okazaki fragments?", o: ["Helicase", "Polymerase", "Ligase", "Primase"], a: 2, e: "DNA ligase seals fragments on the lagging strand." },
    { q: "Why is the lagging strand synthesised in fragments?", o: ["DNA polymerase only works 5' → 3'", "Helicase splits it", "It is shorter", "It needs no enzymes"], a: 0, e: "Polymerase only builds 5'→3', so the antiparallel strand must be done in short Okazaki pieces." },
    { q: "The central dogma is:", o: ["RNA → DNA → protein", "DNA → RNA → protein", "Protein → RNA → DNA", "DNA → protein → RNA"], a: 1, e: "Information flows DNA → RNA → protein." },
    { q: "Which enzyme builds mRNA during transcription?", o: ["DNA polymerase", "RNA polymerase", "Helicase", "Ligase"], a: 1, e: "RNA polymerase reads the DNA template and builds mRNA." },
    { q: "DNA template TAC GGC produces which mRNA?", o: ["ATG CCG", "AUG CCG", "TAC GGC", "UAC GGC"], a: 1, e: "Complementary RNA: T→A, A→U, C→G, G→C → AUG CCG (also contains the start codon!)." },
    { q: "Which is true about mRNA and DNA?", o: ["mRNA uses T; DNA uses U", "mRNA uses U; DNA uses T", "Both use T only", "Both use U only"], a: 1, e: "RNA uses uracil; DNA uses thymine." },
    { q: "How many codons are in a 360-base mRNA?", o: ["60", "90", "120", "360"], a: 2, e: "360 ÷ 3 = 120 codons." },
    { q: "What is the start codon?", o: ["UAA", "AUG", "UGA", "AUC"], a: 1, e: "AUG codes for methionine and starts translation." },
    { q: "Which is NOT a stop codon?", o: ["UAA", "UAG", "UGA", "AUG"], a: 3, e: "AUG is the START codon. Stops are UAA, UAG, UGA." },
    { q: "An mRNA codon AUG pairs with which tRNA anticodon?", o: ["AUG", "UAC", "TAC", "ATG"], a: 1, e: "Anticodon is complementary to codon: A-U, U-A, G-C → UAC." },
    { q: "Bonds between amino acids in a polypeptide are called:", o: ["Hydrogen bonds", "Peptide bonds", "Ionic bonds", "Phosphodiester bonds"], a: 1, e: "Peptide bonds link amino acids." },
    { q: "What occupies the A site of the ribosome?", o: ["The growing peptide chain", "An incoming aminoacyl-tRNA", "The mRNA only", "The exit tRNA"], a: 1, e: "A site = arrival site for new aminoacyl-tRNA." },
    { q: "A negative transcription factor:", o: ["Increases transcription", "Decreases / blocks transcription", "Replicates DNA", "Translates mRNA"], a: 1, e: "Negative TFs decrease or prevent transcription." },
    { q: "Why do different cells in your body look different despite having the same DNA?", o: ["They have different DNA", "They express different genes", "They have different amounts of DNA", "They have no DNA"], a: 1, e: "Same DNA, but transcription factors decide which genes get expressed in each cell type." },
    { q: "Which is NOT an application of the Human Genome Project?", o: ["DNA fingerprinting", "Personalised medicine", "Pharmacogenomics", "Atomic energy"], a: 3, e: "Atomic energy is unrelated. HGP applications include fingerprinting, personalised medicine, pharmacogenomics, gene therapy." },
    { q: "A transgenic organism is one that:", o: ["Has been cloned", "Has a foreign gene deliberately inserted", "Cannot reproduce", "Lives across borders"], a: 1, e: "Transgenic = foreign gene deliberately inserted into the genome." },
    { q: "Why are plasmids commonly used as vectors?", o: ["They are large chromosomes", "They can carry foreign DNA into cells", "They are proteins", "They cannot replicate"], a: 1, e: "Plasmids carry DNA into cells and replicate independently." },
    { q: "Which is an ETHICAL concern about transgenic organisms?", o: ["Higher crop yields", "Vitamin A production", "Animal welfare or genetic privacy", "Faster bacteria growth"], a: 2, e: "Animal welfare and genetic privacy are ethical concerns, not benefits." },
    // ---- Mock-exam questions + variations (Unit 2) ----
    { q: "Who took 'Photo 51', the X-ray image that revealed DNA's helical structure?", o: ["James Watson", "Francis Crick", "Rosalind Franklin", "Martha Chase"], a: 2, e: "Rosalind Franklin's Photo 51 (X-ray diffraction) gave the key evidence for the double helix." },
    { q: "The sugar–phosphate backbone of DNA is made of:", o: ["phosphate groups and pentose sugars", "phosphate groups and bases", "pentose sugars and bases", "bases and hydrogen bonds"], a: 0, e: "The backbone alternates phosphate groups with deoxyribose (pentose) sugars; the bases point inward and pair across the middle." },
    { q: "Which is NOT a valid complementary base pair?", o: ["adenine–thymine", "cytosine–guanine", "adenine–uracil", "guanine–thymine"], a: 3, e: "Guanine pairs with cytosine, never thymine. (Adenine–uracil is valid in RNA.)" },
    { q: "A DNA sample is 33% cytosine. What percentage is adenine?", o: ["17%", "33%", "34%", "66%"], a: 0, e: "Chargaff's rule: C = G = 33%, so C+G = 66%. The remaining 34% is A+T, split equally → A = 17%." },
    { q: "A double-stranded DNA molecule is 20% adenine. What percentage is guanine?", o: ["20%", "30%", "40%", "60%"], a: 1, e: "A = T = 20% → A+T = 40%. So C+G = 60%, split equally → G = 30%." },
    { q: "Which enzyme 'unzips' DNA at the replication fork, and which bonds does it break?", o: ["DNA polymerase; covalent bonds", "helicase; hydrogen bonds", "DNA polymerase; hydrogen bonds", "helicase; covalent bonds"], a: 1, e: "Helicase breaks the hydrogen bonds between complementary bases to separate the two strands." },
    { q: "Which enzyme lays down the short RNA primer needed to start DNA replication?", o: ["primase", "helicase", "DNA ligase", "DNA polymerase"], a: 0, e: "Primase makes the RNA primer; DNA polymerase then extends DNA from it." },
    { q: "A DNA template strand reads TAC GGT CAT. What is the matching mRNA?", o: ["AUG CCA GUA", "ATG CCA GTA", "UAC GGU CAU", "AUG GCA GUA"], a: 0, e: "Transcription pairs T→A, A→U, C→G, G→C: TAC→AUG, GGT→CCA, CAT→GUA. (RNA uses U, not T.)" },
    { q: "A coding strand reads ATG CGC ATC GTA GTC AGT CGT TAG. How many amino acids are in the protein?", o: ["8", "7", "9", "24"], a: 1, e: "Read as mRNA (T→U): AUG-CGC-AUC-GUA-GUC-AGU-CGU = 7 amino acids, then UAG = STOP (not translated)." },
    { q: "Translate the mRNA AUG-CCC-GUG-AAC-GAG. (AAC = Asn, GAG = Glu)", o: ["met-pro-val-asp-glu", "met-pro-val-asp-gly", "met-pro-val-asn-glu", "tyr-gly-his-leu-val"], a: 2, e: "AUG=met, CCC=pro, GUG=val, AAC=asn, GAG=glu → met-pro-val-asn-glu. (Asn, not Asp.)" },
    { q: "A coding-strand codon changes from CCC to CCG. Both code for proline. This mutation is:", o: ["nonsense", "missense", "silent", "frameshift"], a: 2, e: "The amino acid (proline) is unchanged, so the protein is unaffected — a silent mutation." },
    { q: "A single base change turns a codon into a STOP codon partway through a gene. This is a:", o: ["silent mutation", "missense mutation", "nonsense mutation", "no mutation"], a: 2, e: "Creating a premature stop codon cuts the protein short — a nonsense mutation." },
    { q: "To MAXIMISE the amount of protein made from a gene, you could:", o: ["increase positive transcription-factor concentration", "increase the concentration of mRNA-degrading enzymes", "lower the transcription factor's affinity for the regulatory sequence", "increase protein degradation"], a: 0, e: "More positive (activating) transcription factors → more transcription → more mRNA → more protein. The other three options all REDUCE the final amount of protein." },
    { q: "A fruit fly that has had DNA from another organism inserted into its genome is best described as:", o: ["transgenic only", "a GMO only", "both transgenic and a GMO", "a dihybrid"], a: 2, e: "Inserting foreign DNA makes it transgenic, and any organism with deliberately altered DNA is a GMO — both terms apply." },
    { q: "Which was a direct outcome of the Human Genome Project?", o: ["sequencing the complete human genome and mapping gene locations", "inventing DNA fingerprinting", "discovering the double helix", "creating the first GMO"], a: 0, e: "The HGP sequenced the whole genome and located genes. DNA fingerprinting (1984) and the double helix (1953) came earlier." },
  ],
  u3: [
    { q: "Which theory proposes life originated from RNA before DNA?", o: ["Panspermia", "Clay theory", "RNA world", "Electric spark"], a: 2, e: "RNA can both store information AND catalyse reactions — likely came before DNA + proteins." },
    { q: "Which theory suggests life came from outer space?", o: ["Panspermia", "Deep-sea vents", "Electric spark", "Clay"], a: 0, e: "Panspermia = life (or precursors) arrived from space." },
    { q: "What does the electric spark idea explain?", o: ["How full cells form", "How energy helps simple molecules form organic ones", "How DNA replicates", "How tRNA works"], a: 1, e: "It addresses how energy could drive the formation of organic molecules — not full life." },
    { q: "Why is RNA considered a strong early-life candidate?", o: ["It is more stable than DNA", "It can store info AND catalyse reactions", "It is made of protein", "It cannot mutate"], a: 1, e: "Dual ability — information + catalysis (ribozymes) — makes RNA special." },
    { q: "Mitochondria most likely descended from:", o: ["Viruses", "Aerobic proteobacteria", "Plant cells", "Fungi"], a: 1, e: "Aerobic proteobacteria → engulfed → became mitochondria." },
    { q: "Chloroplasts most likely descended from:", o: ["Cyanobacteria", "Mitochondria", "Yeast", "Archaea"], a: 0, e: "Photosynthetic cyanobacteria → engulfed → became chloroplasts." },
    { q: "Which is NOT evidence for endosymbiotic theory?", o: ["Double membrane", "Own circular DNA", "Bacterial-type ribosomes", "Nuclear localisation"], a: 3, e: "Mitochondria & chloroplasts are NOT in the nucleus. The other three are key evidence." },
    { q: "Lamarck's main mistake was:", o: ["Saying species evolve", "Saying acquired traits are heritable", "Studying giraffes", "Not using fossils"], a: 1, e: "Acquired (lifetime) traits are not passed on genetically — Lamarck's key flaw." },
    { q: "According to Darwin, individuals with traits suited to their environment:", o: ["Stay the same", "Decide to evolve", "Survive and reproduce more", "Die quickly"], a: 2, e: "Better-suited individuals → higher fitness → more offspring → trait becomes common." },
    { q: "Which is NOT a requirement of natural selection?", o: ["Heritable variation", "Overproduction of offspring", "Competition for resources", "Constant environment"], a: 3, e: "Constant environment is NOT required — actually changing environments often drive evolution." },
    { q: "Biological fitness means:", o: ["Physical strength", "Surviving AND reproducing successfully", "Living the longest", "Being the fastest"], a: 1, e: "Fitness = reproductive success, not muscle strength." },
    { q: "Do individuals evolve?", o: ["Yes, during their lifetime", "No — populations evolve over generations", "Only plants do", "Only animals do"], a: 1, e: "Populations evolve; individuals don't." },
    { q: "Human-chimp DNA being ~98% similar is which evidence?", o: ["Fossil", "Anatomical", "Molecular / biochemical", "Behavioural"], a: 2, e: "DNA / protein sequence similarity = molecular evidence." },
    { q: "Similar forelimb bones in humans, bats, and whales are evidence of:", o: ["Convergent evolution", "Anatomical homology", "Molecular drift", "Mimicry"], a: 1, e: "Homologous structures from a common ancestor — anatomical evidence." },
    { q: "Before industrial pollution, which peppered moth colour was more common?", o: ["Dark", "Light / cream", "Red", "Green"], a: 1, e: "Light moths were camouflaged on light tree bark; pollution flipped this." },
    { q: "Why did dark peppered moths thrive after pollution darkened tree bark?", o: ["They became smarter", "Better camouflage → less predation → more reproduction", "Pollution gave them powers", "Light moths emigrated"], a: 1, e: "Higher fitness on dark surfaces → more survival and reproduction → frequency rose." },
    { q: "Migration is what type of adaptation?", o: ["Structural", "Behavioural", "Coadaptation", "Mimicry"], a: 1, e: "Migration is an action, so it's behavioural." },
    { q: "King snake resembling the venomous coral snake is an example of:", o: ["Coadaptation", "Mimicry", "Endosymbiosis", "Convergent fossils"], a: 1, e: "Resembling another species for survival advantage = mimicry." },
    { q: "Flowers and their pollinators evolving matching shapes is:", o: ["Mimicry", "Coadaptation", "Convergence only", "Genetic drift"], a: 1, e: "Two species adapt in relation to each other = coadaptation." },
    { q: "Which best summarises evolution?", o: ["Individuals change to fit their environment", "Mutation creates variation; selection favours higher fitness over generations", "DNA never changes", "Acquired traits are inherited"], a: 1, e: "Mutation → variation → fitness differences → selection → adaptation over generations." },
    // ---- Mock-exam questions + variations (Unit 3) ----
    { q: "What was most likely the FIRST genetic material on early Earth?", o: ["DNA", "Lipids", "RNA", "Proteins"], a: 2, e: "RNA can both store information and catalyse reactions, so the 'RNA world' likely came before DNA and proteins." },
    { q: "The endosymbiont theory best explains the origin of which eukaryotic structures?", o: ["ribosomes only", "mitochondria only", "chloroplasts only", "both mitochondria and chloroplasts"], a: 3, e: "Both probably began as free-living prokaryotes engulfed by a host cell — they keep their own circular DNA and double membranes." },
    { q: "Which is NOT a requirement for natural selection to occur?", o: ["competition for resources", "heritable traits", "variation within the species", "genetic drift"], a: 3, e: "Selection needs variation, heritability and a struggle for survival. Genetic drift is a separate, random mechanism — not a requirement." },
    { q: "Butterfly wings and bat wings are called ANALOGOUS structures because:", o: ["they share a recent common ancestor", "the species are closely related", "they serve the same function despite different origins", "the bones inside are identical"], a: 2, e: "Analogous structures do the same job but evolved independently (convergent evolution) — not from a shared ancestral structure." },
    { q: "Whale hip bones share the same basic bone pattern as the hip bones of other mammals. They are therefore:", o: ["analogous", "convergent", "homologous", "ancestral"], a: 2, e: "Same underlying structure inherited from a common ancestor = homologous, even though the function has changed." },
    { q: "Bird wings and mammal forelimbs contain similar bones. This is best explained by:", o: ["birds evolving from mammals", "mammals evolving from birds", "a shared common ancestor", "independent (convergent) evolution"], a: 2, e: "Homologous bones in different groups point to descent from a common ancestor." },
    { q: "White fur in animals living in snowy habitats is an example of a(n) ___ adaptation.", o: ["structural", "behavioural", "physiological", "geographical"], a: 0, e: "Fur colour is a physical body feature → structural adaptation. (Behavioural = actions; physiological = internal processes.)" },
    { q: "A population shows p² = 0.4, 2pq = 0.3, q² = 0.3, unchanged across generations. Is it in Hardy–Weinberg equilibrium?", o: ["yes", "no", "not enough information", "only at generation 1"], a: 1, e: "Check the maths: p²=0.4 → p≈0.63 and q²=0.3 → q≈0.55, but then 2pq should be ≈0.69, not 0.3. The frequencies are internally inconsistent → NOT in HW equilibrium." },
    { q: "In a Hardy–Weinberg population, 8% are born homozygous recessive (q² = 0.08). What % are heterozygous carriers?", o: ["11%", "19%", "41%", "89%"], a: 2, e: "q = √0.08 ≈ 0.28, so p ≈ 0.72. Carriers = 2pq = 2(0.72)(0.28) ≈ 0.41 → about 41%." },
    { q: "In a Hardy–Weinberg population, q² = 0.16 (16% recessive). What is the frequency of the dominant allele p?", o: ["0.4", "0.6", "0.16", "0.84"], a: 1, e: "q = √0.16 = 0.4, so p = 1 − 0.4 = 0.6." },
    { q: "A brown beetle crosses a barrier into a green-beetle population and breeds, adding his alleles to that group. This is:", o: ["genetic drift", "mutation", "bottleneck effect", "gene flow"], a: 3, e: "Movement of alleles between populations through migration and breeding = gene flow." },
    { q: "A volcanic eruption randomly kills 80% of a spider population, shifting allele frequencies among the survivors. This is:", o: ["founder effect", "gene flow", "genetic drift (bottleneck)", "directional selection"], a: 2, e: "A random catastrophe slashing the population is a bottleneck — a form of genetic drift, not selection." },
    { q: "Lizards have many short-tailed and many long-tailed individuals but few with medium tails. Which type of selection is this?", o: ["directional selection", "stabilizing selection", "sexual selection", "disruptive selection"], a: 3, e: "Both extremes are favoured and the middle is selected against → disruptive (diversifying) selection." },
    { q: "Male ligers (lion × tiger hybrids) are sterile and cannot reproduce. This is an example of:", o: ["postzygotic isolation", "prezygotic isolation", "temporal isolation", "speciation"], a: 0, e: "A hybrid forms but is sterile — the barrier acts AFTER fertilisation, so it's postzygotic isolation." },
    { q: "Two meadowlark species share a habitat and breeding season but have different mating songs and don't attract each other. This is:", o: ["temporal isolation; sympatric speciation", "behavioural isolation; allopatric speciation", "temporal isolation; allopatric speciation", "behavioural isolation; sympatric speciation"], a: 3, e: "Different songs = behavioural isolation; living in the same area (no geographic barrier) = sympatric." },
  ],
  u4: [
    { q: "What is taxonomy?", o: ["The study of taxes", "The science of naming, describing, and classifying organisms", "The study of cell taxa", "Naming of chemicals"], a: 1, e: "Taxonomy = naming + describing + classifying living things." },
    { q: "Who developed binomial nomenclature?", o: ["Aristotle", "Charles Darwin", "Carl Linnaeus", "Robert Koch"], a: 2, e: "Linnaeus, 18th-century Swedish naturalist, created the two-part naming system." },
    { q: "Which list is in the correct order, broadest → most specific?", o: ["Kingdom, Domain, Phylum, Class", "Domain, Kingdom, Phylum, Class", "Species, Genus, Family, Order", "Domain, Phylum, Kingdom, Order"], a: 1, e: "Domain is broadest; the full order is Domain→Kingdom→Phylum→Class→Order→Family→Genus→Species." },
    { q: "In Ailuropoda melanoleuca (giant panda), the species name is:", o: ["Ailuropoda", "melanoleuca", "Both words", "Ursidae"], a: 1, e: "The second word is the specific epithet; the first word (Ailuropoda) is the genus." },
    { q: "Which is a domain of life?", o: ["Animalia", "Eukarya", "Plantae", "Mammalia"], a: 1, e: "The three domains are Bacteria, Archaea, and Eukarya. Animalia and Plantae are kingdoms." },
    { q: "What is a monophyletic group (clade)?", o: ["A single species", "A common ancestor plus all of its descendants", "Only extinct species", "Organisms with the same habitat"], a: 1, e: "A clade includes one ancestor and ALL descendants — the heart of cladistics." },
    { q: "What evidence does MODERN taxonomy add beyond Linnaeus?", o: ["Only physical looks", "DNA and evolutionary relationships", "Habitat only", "Size only"], a: 1, e: "Modern taxonomy uses DNA, genetic evidence and evolutionary relationships." },
    { q: "Which is NOT a molecular systematics technique?", o: ["DNA hybridization", "PCR", "DNA sequencing", "Gram staining"], a: 3, e: "Gram staining classifies bacteria by cell wall type — not a molecular systematics method." },
    { q: "A node on a cladogram represents:", o: ["A derived trait", "A common ancestor", "An extinction", "A species name"], a: 1, e: "Nodes = common ancestors; branches = groups." },
    { q: "Phylogenetic trees primarily show which kind of evolution?", o: ["Convergent", "Divergent", "Reverse", "Static"], a: 1, e: "Branches diverge from common ancestors — phylogenetic trees depict divergent evolution." },
    { q: "Darwin's finches on the Galápagos are a classic example of:", o: ["Convergent evolution", "Adaptive radiation", "Coevolution", "Reverse evolution"], a: 1, e: "One ancestor rapidly diversified into many species filling different niches — adaptive radiation." },
    { q: "Wings in bats, birds, and butterflies are an example of:", o: ["Divergent evolution", "Convergent evolution", "Adaptive radiation", "Genetic drift"], a: 1, e: "Unrelated species developed similar traits independently — convergent evolution." },
    { q: "Which kingdom has cell walls made of peptidoglycan?", o: ["Fungi", "Plantae", "Bacteria", "Animalia"], a: 2, e: "Peptidoglycan is the Bacteria shortcut. Plants = cellulose, fungi = chitin." },
    { q: "Which is NOT a type of biodiversity?", o: ["Genetic", "Species", "Ecosystem", "Climatic"], a: 3, e: "The three types are genetic, species, and ecosystem diversity." },
    { q: "A dichotomous key works by:", o: ["Random guessing", "Two-choice questions at each step", "DNA sequencing", "Counting cells"], a: 1, e: "Each step gives two contrasting choices until the organism is identified." },
  ],
  u5: [
    { q: "Viruses are considered non-living mainly because they:", o: ["Have no DNA", "Cannot reproduce independently", "Are too small", "Live in water"], a: 1, e: "They lack cells, metabolism, and can't reproduce without a host." },
    { q: "The protein coat of a virus is called the:", o: ["Envelope", "Capsid", "Nucleoid", "Plasmid"], a: 1, e: "Capsid = protein coat protecting the genome." },
    { q: "A prion is made of:", o: ["RNA only", "DNA only", "Misfolded protein only", "Capsid + DNA"], a: 2, e: "Prions have NO nucleic acid — just misfolded protein." },
    { q: "Correct order of the lytic cycle?", o: ["Entry, Attachment, Release, Synthesis, Assembly", "Attachment, Entry, Synthesis, Assembly, Release", "Synthesis, Attachment, Entry, Release, Assembly", "Attachment, Synthesis, Entry, Assembly, Release"], a: 1, e: "Attachment → Entry → Synthesis → Assembly → Release." },
    { q: "In which cycle does viral DNA integrate into the host DNA?", o: ["Lytic", "Lysogenic", "Binary fission", "Conjugation"], a: 1, e: "Lysogenic = integration + latency; lytic = burst the cell." },
    { q: "Which is true of BOTH bacteria and archaea?", o: ["Have a nucleus", "Are prokaryotic & unicellular", "Have peptidoglycan", "Are multicellular"], a: 1, e: "Both are unicellular prokaryotes; only bacteria have peptidoglycan." },
    { q: "Gram-positive bacteria appear what colour and why?", o: ["Pink — thin wall", "Purple — thick peptidoglycan", "Green — chlorophyll", "Clear — no wall"], a: 1, e: "Thick peptidoglycan retains the violet stain → purple." },
    { q: "Bacteria reproduce asexually by:", o: ["Mitosis", "Binary fission", "Meiosis", "Budding only"], a: 1, e: "Binary fission → two identical daughter cells." },
    { q: "Genetic recombination in bacteria happens mainly via transfer of:", o: ["Ribosomes", "Plasmids", "Capsules", "Flagella"], a: 1, e: "Conjugation transfers plasmids through a pilus." },
    { q: "Antibiotics may NOT be used to treat:", o: ["Bacterial infections", "Viral infections", "Salmonella", "Strep throat"], a: 1, e: "Antibiotics work on bacteria, not viruses." },
    { q: "A mosquito spreading malaria is an example of a:", o: ["Reservoir", "Vector", "Pathogen", "Host only"], a: 1, e: "A vector carries and transmits a pathogen between hosts." },
    { q: "A disease spread across many countries or continents is:", o: ["Endemic", "Epidemic", "Pandemic", "Sporadic"], a: 2, e: "Pandemic = multi-country/continent spread (e.g. COVID-19)." },
    { q: "Which immunity is fast, nonspecific, and has no memory?", o: ["Adaptive", "Innate", "Passive", "Active"], a: 1, e: "Innate immunity = immediate, general defence, present from birth." },
    { q: "Antibodies are produced by:", o: ["Macrophages", "B cells", "Skin cells", "Red blood cells"], a: 1, e: "B lymphocytes make antibodies; this is specific immunity." },
    { q: "The only human disease eradicated worldwide is:", o: ["Malaria", "Polio", "Smallpox", "Influenza"], a: 2, e: "Smallpox is the only one fully eradicated globally." },
    { q: "Herd immunity protects vulnerable people by:", o: ["Curing them directly", "Reducing how easily a pathogen spreads", "Killing all bacteria", "Replacing antibodies"], a: 1, e: "Enough immune people → fewer transmission chances → vulnerable protected." },
  ],
};

// ---------- STYLES --------------------------------------------

// ======================================================
// VISUAL UPGRADE: Ariana-style promo + cute illustrations
// ======================================================
// Put your own legally usable Ariana Grande / song image here.
// Upload the image to the same website folder under: images/ariana-ad.jpg
// If the file does not exist yet, the site will show a cute gradient placeholder.;

export const NOTICES = [
  {
    id: 'profile_update_2026_05_31_v2',
    date: '2026-05-31',
    title: '📣 Profile Update · 个人信息功能上线',
    zh: 'MLStudyNest 现在可以添加个人资料啦！点击右上角的用户信息按钮，进入 Profile 页面，就可以填写生日、年级、喜欢的科目和个人介绍。填写生日后，生日当天第一次打开网站时，你会收到专属的 Happy Birthday 弹窗。快去更新你的 Profile 吧！',
    en: 'MLStudyNest now lets you add your personal profile! Click the user information button in the top-right corner to open your Profile page, where you can add your birthday, grade, favorite subject, and bio. After adding your birthday, you will receive a special Happy Birthday popup the first time you open the website on your birthday. Go update your Profile!'
  },
  {
    id: 'mlstudynest_update_2026_05_31_v1',
    date: '2026-05-31',
    title: 'Welcome to MLStudyNest!',
    zh: '欢迎来到 MLStudyNest！这个网站是为枫叶国际学校学生设计的学习平台。我们最近更新了 Practice Test、学习进度保存、Review 标记、Topic Mini Practice、Resource Sharing、Ad Submission、音乐奖励按钮和手机端页面优化。你可以登录账号保存学习记录，也可以分享资料、参与广告位投稿和点赞投票。希望它能帮助你更轻松地复习与学习！目前的学习功能更多的是生物，后续会一直更新！',
    en: 'Welcome to MLStudyNest! This website is a learning platform designed for Maple Leaf International School students. Recent updates include Practice Test, saved progress, Review marks, Topic Mini Practice, Resource Sharing, Ad Submission, a music reward button, and mobile layout improvements. You can log in to save your progress, share resources, submit ad content, and vote for posts. We hope it helps make reviewing and studying easier. Most current learning content is Biology-focused, and more updates will continue to be added.'
  }
];

export type UnitId = keyof typeof TOPICS;